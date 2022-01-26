import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';
import IdRequest from "../views/Auth/IdRequest";
import PassRequest from '../views/Auth/PassRequest'
import foo from "../views/foo";
import Dashboard from "../components/Dashboard";
import BlogListV from "../views/Blog/BlogListV";
import BlogDetailV from "../views/Blog/BlogDetailV";
import BlogCreateV from "../views/Blog/BlogCreateV";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/register',
        name: 'Register',
        component: Register
    },

    {
        path: '/id.request',
        name: 'IdRequest',
        component: IdRequest
    },

    {
        path: '/password.request',
        name: 'PassRequest',
        component: PassRequest
    },
    {
        path: '/foo',
        name: 'foo',
        component: foo
    },
    {
      path: '/blog',
      name: 'BlogListV',
      component: BlogListV
    },
    {
        path: "/blog/:id",
        name: "BlogDetailV",
        component: BlogDetailV,
    },
    {
        path: "/createblog",
        name: "BlogCreateV",
        component: BlogCreateV,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        // beforeEnter: (to, form, next) =>{
        //     axios.get(URL_API_ATENTICATED).then(()=>{
        //         next()
        //     }).catch(()=>{
        //         return next({ name: 'Login'})
        //     })
        // }
    },


];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router