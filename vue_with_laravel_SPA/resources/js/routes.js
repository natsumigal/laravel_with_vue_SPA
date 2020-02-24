import Vue from 'vue';
import Router from 'vue-router';

// login/register
import Dashboard from '@/js/components/registration/Dashboard.vue';


Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
        }

    ]
});

export default router
