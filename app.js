import Vue from 'vue';
import VueSC from './vue-sc.vue'
import VueJsx from './vue-jsx'
import VueClass from './vue-class'

Vue.component('vue-sc', VueSC)
Vue.component('vue-jsx', VueJsx)
Vue.component('vue-class', VueClass)

const app = new Vue({
  el: '#app'
})