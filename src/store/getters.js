const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  uid: state => state.user.uid,
  treenode: state => state.treechart.treeNodeID,
  treestatus: state => state.treechart.enableEdit,
  curtab: state => state.treechart.curType2signal,
  wsmsg: state => state.websocket.msg
}
export default getters
