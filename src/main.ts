

import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from '../src/plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router'
import Routes from '../src/router/index'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { useCounterStores } from './stores/index'

/* import specific icons */
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInstagram,faTelegram,faWhatsapp,faYoutube,faBlog,faAddressCard,faCircleInfo)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


Vue.use(VueCompositionAPI)
Vue.use(VueResource)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes : Routes
})

//define the router guards

// router.beforeEach((to,from,next)=>{
//   if (to.name === 'listuser'){

//    next(false)

//   }else{
//    next()
//   }
  
// })














const app = createApp({
  vuetify,
  pinia: createPinia(),
  router:router,
  render: () => h(App),
  
})

app.use(PiniaVuePlugin)
app.use(createPinia)
app.mount('#app')


