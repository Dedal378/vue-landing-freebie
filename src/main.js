import '@/styles/main.scss'
import "normalize.css"
import 'swiper/swiper-bundle.css';
import Vue from 'vue'
import App from './App.vue'

import('animate.css');

Vue.config.productionTip = false

new Vue({ render: h => h(App), }).$mount('#app')
