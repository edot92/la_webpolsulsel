import Vue from 'vue'
import App from './App'
// Import F7
import F1 from 'framework7'
// Import F7 Vue Plugin
import F2 from 'framework7-vue'
// Import F7 iOS Theme Styles
import 'framework7/dist/css/framework7.ios.min.css'
import 'framework7/dist/css/framework7.ios.colors.min.css'
import '../node_modules/framework7-icons/css/framework7-icons.css'
import './sass/main.scss'
import Routes from './routes'
import loading from 'vue-full-loading'

/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */
import swal from 'sweetalert'
// import 'jquery'
window.$ = window.jQuery = require('jquery')
require('../node_modules/sweetalert/dist/sweetalert.css')
require('../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css')
require('../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min')
require('../node_modules/clockpicker/dist/bootstrap-clockpicker.css')
require('../node_modules/clockpicker/dist/bootstrap-clockpicker.min.js')
// require('../node_modules/pace-progress/pace.min')
// require('../node_modules/pace-progress/themes/green/pace-theme-loading-bar.css')
// window.overlay = require('../node_modules/jquery-loading-overlay/dist/loading-overlay.min.js')
// console.log(window.overlay)
require('../node_modules/jquery-easy-loading/dist/jquery.loading.min.js')
require('../node_modules/jquery-easy-loading/dist/jquery.loading.min.css')

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCordova from 'vue-cordova'
// require('bootstrap-webpack')
Vue.use(swal)
Vue.use(loading)
Vue.use(F1)
Vue.use(F2)
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})
Vue.use(VueAxios, axios)
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8080/api'
} else {
  axios.defaults.baseURL = '/v1'
}
// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes
  },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
