import { CustomRouteRecordRaw } from "@/types/index"

const routerConfig: CustomRouteRecordRaw[] = [
  {
    name: "Home",
    path: "/home",
    component: "index.vue",
  },
  {
    name: "HomeDetail",
    path: "/home/detail",
    component: "detail.vue",
  },
]

export default routerConfig
