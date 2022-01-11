import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/dashboard/Home.vue"
import Product from "../components/dashboard/Products.vue"
import Cart from "../components/dashboard/Cart.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {path:'/' , component: Home},
        {path:'/product' , component: Product},
        {path:'/cart' , component: Cart},
    ]
})