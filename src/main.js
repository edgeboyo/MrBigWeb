import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Root from "./components/Root";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

const routes = [{ name: "Root", component: Root, path: "" }];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  vuetify,
  router
}).$mount("#app");
