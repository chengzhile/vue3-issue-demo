import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '@/styles/element-variables.scss'

const app = createApp(App)
app.use(ElementPlus, { size: 'medium' })
app.use(store)
app.use(router)
app.mount('#app')
