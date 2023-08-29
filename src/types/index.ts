import { RouteRecordRaw } from "vue-router"
export interface CustomRouteRecordRaw
  extends Omit<RouteRecordRaw, "component"> {
  component: string
}
