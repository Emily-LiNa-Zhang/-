import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/home/index.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/home', //首页
    name: "Home",
    meta: {
      title: '首页'
    },
    component: () => import('../views/home/index.vue'),
    children: [{
        path: '/resource', //资源管理
        name: "ResourceManage",
        meta: {
          title: '资源管理'
        },
        component: () => import('../views/home/ResourceManage/index.vue'),
        children: [{
            path: '/resource/user', //用户管理
            name: "UserManage",
            meta: {
              title: '用户管理'
            },
            component: () => import('../views/home/ResourceManage/user.vue'),
          },
          {
            path: '/resource/tool', //工具管理
            name: "ToolManage",
            meta: {
              title: '工具管理'
            },
            component: () => import('../views/home/ResourceManage/tool.vue'),
          }
        ]
      },
      {
        path: '/train', //实训管理
        name: "TrainManage",
        meta: {
          title: '实训管理'
        },
        component: () => import('../views/home/TrainManage/index.vue'),
      },
      {
        path: '/trainplan', //训练计划管理
        name: "TrainPlanManage",
        meta: {
          title: '训练计划管理'
        },
        component: () => import('../views/home/TrainPlanManage/index.vue'),
      },
      {
        path: '/integrate', //综合管理
        name: "IntegrateManage",
        meta: {
          title: '综合管理'
        },
        component: () => import('../views/home/IntegrateManage/index.vue'),
      },
      {
        path: '/system', //体系管理
        name: "SystemManage",
        meta: {
          title: '体系管理'
        },
        component: () => import('../views/home/SystemManage/index.vue'),
      },
    ]
  },
  //重定向,在项目跑起来的时候,访问/,立马让他定向到首页
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/home/index.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router