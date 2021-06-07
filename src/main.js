import Vue from 'vue'
import App from './App.vue'
import "normalize.css"
import('animate.css');
import '@/styles/main.scss'

Vue.config.productionTip = false

new Vue({ render: h => h(App), }).$mount('#app')
