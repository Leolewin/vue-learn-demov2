import Vue from 'vue'
import App from './App.vue'
import axios from './plugins/axios';
import lodash from './plugins/lodash';

Vue.config.productionTip = false
Vue.use(axios);
Vue.use(lodash);
new Vue({
  render: h => h(App),
})
.$mount('#app')
