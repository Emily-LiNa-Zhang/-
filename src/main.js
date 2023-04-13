import Vue from 'vue' //没有./表示来自nodemodule中
import App from './App.vue' //./表示同级，../表示上一级，@/表示根目录SRC下
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')