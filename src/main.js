import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/index.js'

import vuetify from './plugins/vuetify.js'

import './plugins/axios.js'
import './plugins/chartkick.js'

//Filters
import filters from '../src/filters/filters.js'


Vue.config.productionTip = false

filters.forEach(f => {
	Vue.filter(f.name, f.execute)
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
