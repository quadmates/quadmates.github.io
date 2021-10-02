import { createApp } from 'vue'
import App from './App.vue'
import router from './utils/router'
import components from './utils/globalComponents'
import './styles/index.scss'
import '@fortawesome/fontawesome-free/css/all.css'
const app = createApp(App)

app.use(router)
app.use(components)
app.mount('#app')
