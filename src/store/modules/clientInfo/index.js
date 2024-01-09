import { read as clientInfoRead } from "../../../api/clientInfo";

const state = {
  // store初期化確認用(初期化できていない状態で非同期に取得する値を参照してしまうとエラーとなるため初期化チェックを行ってから確認する)
  isInit: false,
  editInfo: {},
  originInfo: {}
};

const getters = {
  isInit({ isInit }) {
    return isInit;
  },

  getClientName({ editInfo }) {
    return `${editInfo.clientInfo.clientLastName} ${editInfo.clientInfo.clientFirstName}`;
  },

  getClientEmail({ editInfo }) {
    return editInfo.clientInfo.clientEmail;
  }
};

const mutations = {
  initializationMutate(state) {
    state.isInit = false;
  },

  loadClientInfoMutate(state, payload) {
    state.editInfo = payload;
    state.originInfo = payload;
    state.isInit = true;
  }
};

const actions = {
  async loadClientInfoRead({ commit }) {
    commit('initializationMutate');

    const clientInfo = await clientInfoRead();

    commit('loadClientInfoMutate', clientInfo.data.result);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
