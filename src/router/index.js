import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: false
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: false
  },

  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index'),
    hidden: false
  },

  {
    path: '/',
    component: Layout,
    redirect: '/cockpit',
    children: [{
      path: 'cockpit',
      name: 'Cockpit',
      component: () => import('@/views/cockpit/index'),
      meta: { title: '驾驶舱', icon: 'dashboard' }
    }]
  },

  {
    path: '/equipment',
    component: Layout,
    redirect: '/equipment',
    name: 'Equipment',
    meta: { title: '设备管理', icon: 'example' },
    hidden: false,
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/equipment/index'),
        meta: { title: '设备编辑', icon: 'tree' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '变量映射', icon: 'table' },
        hidden: true
      }
    ]
  },

  {
    path: '/data-manage',
    component: Layout,
    redirect: '/data-manage',
    name: 'DataManage',
    meta: { title: '数据管理', icon: 'list' },
    hidden: false,
    children: [
      {
        path: 'history',
        name: 'History',
        component: () => import('@/views/data-manage/history'),
        meta: { title: '历史数据', icon: 'chart' }
      },
      {
        path: 'analyz',
        name: 'Analyz',
        component: () => import('@/views/data-manage/analyze'),
        meta: { title: '数据分析', icon: 'guide' }
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/data-manage/setting'),
        meta: { title: '采集设置', icon: 'edit' }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    hidden: true,
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    hidden: true,
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  {
    path: '/realtime',
    component: Layout,
    name: 'realtime',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'RTData',
        component: () => import('@/views/realtime/index'),
        meta: { title: '实时数据', icon: 'list' }
      }
    ]
  },

  {
    path: '/history',
    component: Layout,
    name: 'history',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'History',
        component: () => import('@/views/history/index'),
        meta: { title: '历史数据', icon: 'chart' }
      }
    ]
  },

  {
    path: '/test',
    component: Layout,
    name: 'test',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'Test',
        component: () => import('@/views/test/index'),
        meta: { title: 'test' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
