// 配置路由相关信息
import VueRouter from "vue-router";
import Vue from "vue";
import BookTable from "../components/BookTable";
import home from "../components/home";
// import basic from "../basic/index";
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
      redirect:'/home/zy'
    },
    {
      path: '/home/:id',
      component: home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/basic',
      // 路由懒加载
      component: ()=>import('../basic/index'),
      // meta为元数据：描述数据的数据
      meta:{
        title:'基础知识点'
      },
      children:[
        {
          // 配置子路由的默认路由
          path:'',
          redirect:'smalldemo'
        },
        {
          // 子路由的路径不需要写/
          path:'smalldemo',
          component:()=>import('../components/ClickColor'),
          meta:{
            title:'小案例'
          }
        },
        {
          path:'vmodeldemo',
          component:()=>import('../components/vModelDemo'),
          meta:{
            title:'vmodule案例'
          }
        }
      ]
    }, {
      path: '/bookdemo',
      component: BookTable,
      meta:{
        title:'图书管案例'
      },
      beforeEach:(to,from)=>{
        console.log(to);
        console.log(from);
      }
    }, {
      path: '/slotdemo',
      component: slotIndex,
      meta:{
        title:'插槽案例'
      }
    }, {
      path: '/toolbar',
      component: ()=>(import('../components/toolbar/index'))
    }
  ] ,
  mode:'history',
  // 修改
  // linkActiveClass:'modify-class'
})

/**
 * 1、全局守卫：
 * 路由守卫: beforeEach为前置守卫
 * afterEach 后置钩子
 * 2、路由独享守卫
 * 3、组件内的守卫
 */
router.beforeEach((to,from,next)=>{
  console.log(to)
  console.log(from)
  //存在嵌套路由时，直接从meta里拿title可能会拿不到，可以从matched数组里拿
 // document.title=to.matched[0].meta.title
  document.title=to.meta.title;
  next()
});
router.afterEach((to,from)=>{
  console.log(to);
  console.log(from);
});

// 3 将router对象传入vue实例中
export default router