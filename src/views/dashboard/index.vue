<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-middle">
          <dv-decoration-7 style="width:100%;height:30px;">智能机电运维管理平台</dv-decoration-7></div>
        <div class="mh-right">
          <dv-border-box-2
            style="width: 60px; height: 50px; line-height: 50px; text-align:center;margin:5px 10px;"
          >
            <a href="/">Home</a>
          </dv-border-box-2>
        </div>
        <div>
          <Datetime></Datetime>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <div class="mc-top">
          <div class="mc-top-left">
            <dv-border-box-10>
              <dv-decoration-1 style="height:50px;" />
              <dv-border-box-5 style="width: 90%;height: 80%;left: 10px;">
                <dv-decoration-9 style="width:150px;height:150px;top: 60px;left: 30px;">
                  <p style="font-size: xx-large">60%</p>
                </dv-decoration-9>
              </dv-border-box-5>
            </dv-border-box-10>
          </div>
          <MapChart />
          <div class="mc-top-right">
            <dv-border-box-10>
              <dv-active-ring-chart :config="mcTopRightOpt" style="width:300px;height:300px" />
              <span style="padding-left: 60px;font-size: x-large;">当前在线设备占比</span>
            </dv-border-box-10>
          </div>
        </div>
        <div class="mc-bottom">
          <div class="mc-bottom-left">
            <dv-border-box-10>
              <span style="padding-left: 10px;font-size: large;">总能耗排名</span>
              <dv-scroll-ranking-board :config="mcBottomLeftOpt" style="padding: 10px; height: 80%;" />
            </dv-border-box-10>
          </div>
          <div class="mc-bottom-middle">
            <dv-border-box-10>
              <TopRightCmp style="height: 100%;width:100%"></TopRightCmp>
            </dv-border-box-10>
          </div>
          <div class="mc-bottom-right">
            <dv-border-box-10>
              <span style="padding-left: 10px;font-size: large;">故障事件列表</span>
              <dv-scroll-board :config="mcBottomRightOpt" style="padding: 10px; height: 80%;" />
            </dv-border-box-10>
          </div>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
import store from '@/store'

import Datetime from './Datetime.vue'
import MapChart from './MapChart.vue'
import TopRightCmp from './TopRightCmp.vue'

export default {
  name: 'DataView',
  components: {
    Datetime,
    MapChart,
    TopRightCmp
  },
  data() {
    return {
      mcTopRightOpt: {
        data: [
          {
            name: '广州',
            value: 55
          },
          {
            name: '北京',
            value: 120
          },
          {
            name: '上海',
            value: 78
          },
          {
            name: '杭州',
            value: 66
          },
          {
            name: '深圳',
            value: 80
          }
        ],
        lineWidth: 40,
        activeRadius: '60%'
      },
      mcBottomLeftOpt: {
        data: [
          {
            name: '广州',
            value: 55
          },
          {
            name: '北京',
            value: 120
          },
          {
            name: '上海',
            value: 78
          },
          {
            name: '杭州',
            value: 66
          },
          {
            name: '深圳',
            value: 80
          }
        ],
        unit: 'kwh',
        rowNum: 4
      },
      mcBottomRightOpt: {
        header: ['日期', '地点', '事件'],
        data: [
          ['2020/03/01', '广州', '零件疲劳失效'],
          ['2020/03/03', '杭州', '电流过大'],
          ['2020/03/05', '北京', '振动异常'],
          ['2020/03/06', '广州', '电流过大'],
          ['2020/03/09', '上海', '电流过大'],
          ['2020/03/14', '上海', '定位异常'],
          ['2020/03/16', '深圳', '润滑油有异物'],
          ['2020/03/17', '北京', '异常停机'],
          ['2020/03/20', '杭州', '异常停机'],
          ['2020/03/23', '重庆', '振动幅值过大']
        ]
      }
    }
  },

  mounted: function() {
    store.dispatch('app/closeSideBar', { withoutAnimation: true })
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }
    }

    .mh-middle {
      font-size: 30px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }

    .mh-left, .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");
    display: flex;
    margin-left: 0;

    .mc-top, .mc-bottom {
      box-sizing: border-box;
      // padding: 10px;
      display: flex;
    }

    .mc-top {
      height: 60%;

      .mc-top-left {
        width: 40%;
        padding: 20px;
      }

      .mc-top-right {
        width: 40%;
        padding: 20px;
      }
    }

    .mc-bottom {
      height: 40%;
      padding-bottom: 50px;

      .mc-bottom-left {
        padding: 0px 10px 20px 20px;
        width: 30%;
      }

      .mc-bottom-middle {
        padding: 0px 10px 20px 10px;
        width: 40%;
      }

      .mc-bottom-right {
        padding: 0px 20px 20px 10px;
        width: 30%;
      }
    }
  }
}
</style>

<!-- <template>
  <div class="dashboard-container" style="height: 100%;">
    <dv-border-box-1>dv-border-box-1</dv-border-box-1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style> -->

<!-- <template>
  <div>
    <iframe
      id="mobsf"
      allowfullscreen
      src="http://39.108.137.187:8000/"
      scrolling="no"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    /**
    * iframe-宽高自适应显示
    */
    function changeMobsfIframe() {
      const mobsf = document.getElementById('mobsf')
      const deviceWidth = document.body.clientWidth
      const deviceHeight = document.body.clientHeight
      mobsf.style.width = Number(deviceWidth) + 'px' // 数字是页面布局宽度差值
      mobsf.style.height = Number(deviceHeight) + 'px' // 数字是页面布局高度差
    }

    changeMobsfIframe()

    window.onresize = function() {
      changeMobsfIframe()
    }
  }
}
</script> -->
