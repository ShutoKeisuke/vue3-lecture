import { createStore } from 'vuex'

import clientInfo from './modules/clientInfo'
import reserveUserInfo from './modules/reserveUserInfo'

export default createStore({
  modules: {
    clientInfo,
    reserveUserInfo
  }
});
