import Vue from "vue";
import App from "./App.vue";
import routes from './routes';
import VueRouter from 'vue-router';
import eventBus from "./plugins/event-bus.";

Vue.use(VueRouter)
Vue.use(EventBus)

const router = new VueRouter({ routes })

new Vue({
  render: (h) => h(App),
}).$mount("#app");
