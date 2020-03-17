const state = {
  treeNodeID: 1,
  enableEdit: false,
  curType2signal: 'demod'
}

const mutations = {
  CHANGE_TREE_NODE: (state, treeNodeID) => {
    state.treeNodeID = treeNodeID
  },
  CHANGE_TREE_STATUS: (state, enableEdit) => {
    state.enableEdit = enableEdit
  },
  CHANGE_TAB: (state, curType2signal) => {
    state.curType2signal = curType2signal
  }
}

const actions = {
  changeTreeNode({ commit }, nodeID) {
    commit('CHANGE_TREE_NODE', nodeID)
  },

  changeTreeStatus({ commit }, editing) {
    commit('CHANGE_TREE_STATUS', editing)
  },

  changeTab({ commit }, tabName) {
    commit('CHANGE_TAB', tabName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
