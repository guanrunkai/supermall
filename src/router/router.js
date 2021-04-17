import vue from 'vue'
import Router from 'vue-router'

const home=()=>import('../views/home/home.vue')
const shopping=()=>import('../views/shopping/shopping.vue')
const category=()=>import('../views/category/category.vue')
const profile=()=>import('../views/profile/profile.vue')
const Detail=()=>import('../views/detail/Detail.vue')

vue.use(Router)

const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/shopping',
        component:shopping
    },
    {
        path:'/category',
        component:category
    },
    {
        path:'/profile',
        component:profile
    },
    {
        path:'/detail/:iid',
        component:Detail
    }
    
]
const router =new Router({
    routes,
    mode:'history'
})
export default router