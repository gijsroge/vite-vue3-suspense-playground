import { createApp } from "vue";
import App from "./App.vue";
import { createRouter } from "vue-router";
import { routes, routerOptions } from "./router/index";

const router = createRouter({
  ...routerOptions,
  routes,
});

const app = createApp(App);
app.use(router).mount("#app");
