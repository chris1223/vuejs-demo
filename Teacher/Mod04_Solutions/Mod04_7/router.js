import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(Router);

export default new Router({
    mode:'history',
    base:process.env.Base_URL,
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/About',
            name:'About',
            component:About
        }
    ]
})

