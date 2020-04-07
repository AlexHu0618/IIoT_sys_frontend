const state = {
  socketTask: null, // ws链接
  webSocketPingTimer: null, // 心跳定时器
  webSocketPingTime: 10000, // 心跳的间隔，当前为 10秒,
  webSocketReconnectCount: 0, // 重连次数
  webSocketIsReconnect: true, // 是否重连
  webSocketIsOpen: true,
  uid: '', // ws登录userId
  sid: '', // ws登录token
  msg: null // 接收到的信息
}

const mutations = {
  // 发送http请求登录后设置用户id 用于ws登录
  setUid(state, uid) {
    state.uid = uid
  },
  // 发送http请求登录后设置用户token 用于ws登录
  setSid(state, sid) {
    state.sid = sid
  },

  // 初始化ws 用户登录后调用
  webSocketInit(state, uri) {
    const that = this
    // const url = 'ws://192.168.88.107:8889/ws'
    // 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】
    state.socketTask = new WebSocket(uri)

    // ws连接开启后登录验证
    state.socketTask.onopen = function() {
      console.log('WebSocket连接正常打开中...！')
      that.commit('websocket/webSocketLogin')
      // 开始心跳
      // that.commit('websocket/webSocketPing')
      // 注：只有连接正常打开中 ，才能正常收到消息
      state.socketTask.onmessage = function(res) {
        console.log('收到服务器内容：' + res.data)
        state.msg = res.data
        // state.msg = JSON.parse(res.data)
      }
    }

    // 链接开启后登录验证
    state.socketTask.onerror = function(errMsg) {
      console.log(errMsg)
      console.log('ws连接异常')
      that.commit('websocket/webSocketClose')
    }

    // 链接开启后登录验证
    state.socketTask.onclose = function(errMsg) {
      console.log(errMsg)
      console.log('ws连接关闭')
      that.commit('websocket/webSocketClose')
    }
  },

  webSocketLogin() {
    const that = this

    console.log('ws登录')
    const payload = {
      uid: state.uid,
      sid: state.sid,
      type: 1
    }
    that.commit('websocket/webSocketSend', payload)
    that.state.webSocketIsOpen = true
  },

  // 断开连接时
  webSocketClose(state) {
    const that = this
    // 修改状态为未连接
    state.webSocketIsOpen = false
    state.webSocket = null
    // 判断是否重连
    if (
      state.webSocketIsReconnect &&
      state.webSocketReconnectCount === 0
    ) {
      // 第一次直接尝试重连
      that.commit('websocket/webSocketReconnect')
    }
  },

  // 定时心跳
  webSocketPing() {
    const that = this
    that.state.webSocketPingTimer = setTimeout(() => {
      if (!that.state.webSocketIsOpen) {
        return false
      }
      console.log('心跳')
      const payload = {
        type: 0
      }
      that.commit('websocket/webSocketSend', payload)
      clearTimeout(that.state.webSocketPingTimer)
      // 重新执行
      that.commit('websocket/webSocketPing')
    }, that.state.webSocketPingTime)
  },

  // WebSocket 重连
  webSocketReconnect(state) {
    const that = this
    if (state.webSocketIsOpen) {
      return false
    }
    console.log('第' + state.webSocketReconnectCount + '次重连')
    state.webSocketReconnectCount += 1
    // 判断是否到了最大重连次数
    if (state.webSocketReconnectCount >= 10) {
      this.webSocketWarningText = '重连次数超限'
      return false
    }
    // 初始化
    console.log('开始重连')
    that.commit('websocket/webSocketInit')

    // 每过 5 秒尝试一次，检查是否连接成功，直到超过最大重连次数
    const timer = setTimeout(() => {
      that.commit('websocket/webSocketReconnect')
      clearTimeout(timer)
    }, 5000)
  },

  // 发送ws消息
  webSocketSend(state, payload) {
    const that = this
    state.socketTask.send(JSON.stringify(payload))
    // state.socketTask.send({
    //   data: JSON.stringify(payload),
    //   // fail: function(res) {
    //   //   console.log('发送失败')
    //   //   that.state.sendMsgStatus = true
    //   // },
    //   // success: function(res) {
    //   //   console.log('发送成功')
    //   //   that.state.sendMsgStatus = false
    //   // }
    // })
  }
}

// 实现websocket的连接，需要携带参数token
const actions = {
  webSocketInit({
    commit
  }, url) {
    commit('webSocketInit', url)
  },
  webSocketSend({
    commit
  }, p) {
    commit('webSocketSend', p)
  }
}

// // 该部分为了获取websocket的相关方法。会发现此处跟mutations 里的写法是类似的，但是，想使用return，需要将相关数据写在getters里面。
// const getters = {
//   // 获取接收的信息
//   socketMsgs: state => {
//     return state.msg
//   }
// }
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
