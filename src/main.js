import Vue from 'vue'

// BootstrapVue
import './plugins/bootstrap-vue'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Cors Image
import './plugins/corsImage'

// Custom directives
import './directives'

import App from './App.vue'
import router from './router'
import store from './store'

// CSS General
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({

  methods: {

    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }

  },

  // Hook created
  created () {
    this.init()
  },

  router,
  store,
  render: h => h(App)

}).$mount('#app')
