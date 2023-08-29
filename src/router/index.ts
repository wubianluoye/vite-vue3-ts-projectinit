import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteComponent,
} from "vue-router"
import { CustomRouteRecordRaw } from "@/types/index"

const index: RouteRecordRaw = {
  path: "/",
  name: "Hello",
  redirect: "/home",
}

const notFound: RouteRecordRaw[] = [
  {
    path: "/404",
    component: import("@/views/404/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
]
/**
 * 动态创建路由的函数
 * @returns 路由数组
 */
function createRoutes(): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [index] // 存储路由配置的数组，初始值首页路由配置
  // 获取所有路由配置文件
  const configs = import.meta.glob("../views/**/config.ts", {
    eager: true,
    import: "default",
  })
  // 获取所有vue文件
  const comps = import.meta.glob("../views/**/*.vue", {
    eager: true,
    import: "default",
  })

  // 遍历所有配置文件,通过配置文件生成路由
  for (const config in configs) {
    // 拿到配置里面的所有路由
    const conf = configs[config] as
      | CustomRouteRecordRaw[]
      | CustomRouteRecordRaw

    // 用来连接vue文件路径的前缀
    const path = config.replace("config.ts", "")

    if (Array.isArray(conf)) {
      // 当配置为数组情况下，遍历所有配置

      conf.forEach(async (item) => {
        // 对应vue文件的路径拼接
        const fullpath = path + item.component
        // 组装为真实路由对象
        const route = {
          ...item,
          component: comps[fullpath] as RouteComponent,
        }

        routes.push(route as RouteRecordRaw)
      })
    } else {
      // 当配置为对象时

      // 对应vue文件的路径拼接
      const fullpath = path + conf.component
      // 组装为真实路由对象
      const route = {
        ...conf,
        component: comps[fullpath] as RouteComponent,
      } as RouteRecordRaw

      routes.push(route)
    }
  }

  return routes.concat(notFound)
}

const router = createRouter({
  history: createWebHistory(),
  routes: createRoutes(),
})

export default router
