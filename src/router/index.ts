import VueRouter from 'vue-router';
import Vue from 'vue';

import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    routes,
})

router.afterEach(function (from, to) {
    const eleApp = document.querySelector('.app-wrapper');
    if (eleApp) {
        eleApp.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }
})

Vue.use(VueRouter);

export default router;
