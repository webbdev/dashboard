import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Page1 from './views/Page1'
import Page2 from './views/Page2'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/page1', component: Page1 },
        { path: '/page2', component: Page2 }
    ]
})
