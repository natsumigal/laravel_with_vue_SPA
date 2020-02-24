import "./bootstrap";
import Vue from "vue";
import './component.js';
import router from '@/js/routes.js';
import App from '@/js/components/App';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_HOST_LOCAL}/api`
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
