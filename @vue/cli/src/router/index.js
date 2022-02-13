// 配置路由相关信息
import VueRouter from "vue-router";
import Vue from "vue";
import BookTable from "../components/BookTable";
import home from "../components/home";
import basic from "../basic/index";
import slotIndex from "../assets/slot/index";

// 1 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)
//2 创建vueRouter实例
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes: [
    {
      // 配置默认路径，由于网站第一次访问的默认路径为/或者空，可以重定向
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/basic',
      component: basic
    }, {
      path: '/bookdemo',
      component: BookTable
    }, {
      path: '/slotdemo',
      component: slotIndex
    }
  ] ,
  mode:'history',
  // 修改
  // linkActiveClass:'modify-class'
})

// 3 将router对象传入vue实例中
export default router