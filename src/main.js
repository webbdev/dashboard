import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import zingchartVue from 'zingchart-vue';
Vue.component('zingchart', zingchartVue);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'

import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTable} from '@fortawesome/fontawesome-free-solid';

library.add( faTable )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
