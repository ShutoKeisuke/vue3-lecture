import 'normalize.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { worker } from './api/mock/handlers'

const apiMock = async () => {
  if (import.meta.env.VITE_ENV === 'develop') {
    const { worker } = await import('./api/mock/handlers');
    worker.start({
      onUnhandledRequest: 'bypass'
    });
  }
  return Promise.resolve();
}

apiMock().then(() => {
  createApp(App).use(router).use(store).mount('#app')
});
