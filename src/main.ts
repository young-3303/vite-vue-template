import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { createPinia } from "pinia";
import { useVant } from "@/hooks/useVant";

const app = createApp(App)

app.use(createPinia())
app.use(router)
useVant(app)
app.config.globalProperties.$translate = () => {
  return 'hello'
}
app.mount('#app')
// if (import.meta.env.PROD) {
//   import('vconsole').then(vconsole => {
//     new vconsole.default({
//       theme: 'dark',
//     })
//   })
// }

// function Test() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('done')
//     }, 1000)
//   })
// }

// Test().then(res => {
//   console.log(res);
// }).finally(() => {
//   console.log('finally')
// })
