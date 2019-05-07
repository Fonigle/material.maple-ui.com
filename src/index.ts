import './styles';
import './assets/fonts';
import '../_intermediate/iconfonts/iconfont.scss'

import Vue from 'vue';

import App from './app.vue';

import router from './router/index';

import './packages/maple-theme';

import VueBar from 'vuebar';
Vue.use(VueBar);

import MapleMaterialVue from 'maple-material-vue';
Vue.use(MapleMaterialVue);
import 'maple-material-vue/dist/maple-material-vue.css'

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    mounted() {
        // renderAfterDocumentEvent for pre-render.
        document.dispatchEvent(new Event('render-event'))
    }
});
