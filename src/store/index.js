import { createStore } from 'vuex'

import reserveUserInfo from './modules/reserveUserInfo'

export default createStore({
  modules: {
    reserveUserInfo
  }
});
