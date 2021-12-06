import { createApp, h } from "vue-demi";
import { createPinia } from 'pinia'

import App from './App.vue'

//code splitting | lazily loaded file \\
import('./async.js').then(mod => {
  console.log("MOD ", mod)
})

const pinia = createPinia()

const app = createApp({
  pinia,
  render: () => h(App)
})

app.use(pinia);

app.mount('#app')

// createApp(App).mount('#app')
