import Vue from 'vue'
import Router from 'vue-router'

import CheckoutPage from '../page/CheckoutPage.vue'
import CustomerSelect from '../page/CustomerSelect.vue'
import WelcomePage from '../page/WelcomePage.vue'

Vue.use(Router);

export default new Router ({
    routes: [{
        path: '/',
        name: 'Home',
        component: WelcomePage
    },{
        path: '/customer',
        name: 'CustomerSelect',
        component: CustomerSelect
    },{
        path: '/checkout',
        name: 'Checkout',
        component: CheckoutPage
    }],
});