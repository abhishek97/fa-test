import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BProgress } from 'bootstrap-vue'


import VButton from './components/VButton.vue'

library.add(faChevronLeft, faChevronRight, faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-button', VButton)
Vue.component('b-progress', BProgress)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
