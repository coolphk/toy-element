import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import ToyElement from "toy-element"

const app = createApp(App)
console.log(app)
app.use(ToyElement)
app.mount('#app')

