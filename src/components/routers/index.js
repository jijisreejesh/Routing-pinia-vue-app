//createWebHistory is a history mode, 
//which controls how Vue Router will create routes for us.
import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router=createRouter({
    history : createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/cart',
            name:"cart",
            component:()=>import("../views/CartView.vue")
        }
    ]
})
export default router;