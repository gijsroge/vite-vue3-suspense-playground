import {
  createWebHistory,
  NavigationGuardNext,
  NavigationGuardWithThis,
  RouteLocation,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import scrollBehavior from "./scrollBehavior";
import ContentPage from "../views/ContentPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/:slug*",
    name: "ContentPage",
    meta: {},
    component: ContentPage,
  },
] as RouteRecordRaw[];

const routerOptions = {
  history: createWebHistory(),
  mode: "history",
};

const beforeEach: NavigationGuardWithThis<undefined> = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  next();
};

export { routerOptions, routes, beforeEach };
