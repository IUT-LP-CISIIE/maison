// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'





import {Utils} from './components/mixins/Utils.js'
Vue.mixin(Utils)





Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();


store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // le store est ici
  router,
  components: { App },
  template: '<App/>',
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
})
