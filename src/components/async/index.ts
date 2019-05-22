import Vue from 'vue';


Vue.component('start-example', () => import('./start-example/start-example.vue'));
Vue.component('icon-button-toggle-example', () => import('./icon-button-toggle-example/icon-button-toggle-example.vue'));
Vue.component('fab-exited-example', () => import('./fab-exited-example/fab-exited-example.vue'));
Vue.component('checkbox-value-example', () => import('./checkbox-value-example/checkbox-value-example.vue'));
Vue.component('radio-value-example', () => import('./radio-value-example/radio-value-example.vue'));
Vue.component('switch-value-exmaple', () => import('./switch-value-exmaple/switch-value-exmaple.vue'));
Vue.component('input-vmodel-example', () => import('./input-vmodel-example/input-vmodel-example.vue'));