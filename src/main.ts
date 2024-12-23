import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import {useVant} from "@/hooks/useVant";
const app = createApp(App)

app.use(createPinia())
app.use(router)
useVant(app)
app.mount('#app')
if (import.meta.env.PROD) {
    import('vconsole').then(vconsole => {
        new vconsole.default({
            theme: 'dark',
        })
    })
}
