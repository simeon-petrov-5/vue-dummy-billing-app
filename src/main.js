import { createApp } from 'vue'
import App from './App.vue'

import './configs/tailwind.css';
import ArrowUp from './components/registered/ArrowUp.vue'
import ArrowDown from './components/registered/ArrowDown.vue'

const app = createApp(App)
app.component('arrow-up', ArrowUp)
app.component('arrow-down', ArrowDown)

app.mount('#app')
