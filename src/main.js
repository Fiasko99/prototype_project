import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/main.vue'
import About from './components/about.vue'
import Contacts from './components/contacts.vue'
import Info from './components/information.vue'
import Desinsection from './components/desinsection.vue'
import Desinfection from './components/desinfection.vue'
import Deratisation from './components/deratisation.vue'
import Desodoration from './components/desodoration.vue'
import AllDesinsection from './components/all-desinsection.vue'
import AllDesinfection from './components/all-desinfection.vue'
import AllDeratisation from './components/all-deratisation.vue'
import AllDesodoration from './components/all-desodoration.vue'
import Bedbugs from './components/bedbugs.vue'
import Cockroach from './components/cockroach.vue'
import Ant from './components/ant.vue'
import Leatherman from './components/leatherman.vue'
import Flea from './components/flea.vue'
import HotFog from './components/hot-fog.vue'
import ColdFog from './components/cold-fog.vue'
import Rat from './components/rat.vue'
import Mouse from './components/mouse.vue'
import Mole from './components/mole.vue'
import Moth from './components/moth.vue'
import Multiped from './components/multiped.vue'
import Silverfish from './components/silverfish.vue'
import Mosquito from './components/mosquito.vue'
import BarkBeetle from './components/bark-beetle.vue'
import Mite from './components/mite.vue'
import Wasp from './components/wasp.vue'
import MoleCricket from './components/mole-cricket.vue'
import Fly from './components/fly.vue'
import Hogweed from './components/hogweed.vue'
import Order from './components/order.vue'
import Covid19 from './components/covid19.vue'
import Bacteria from './components/bacteria.vue'
import Rip from './components/rip.vue'
import Flat from './components/flat.vue'
import Lichen from './components/lichen.vue'
import Car from './components/car.vue'
import PublickPlace from './components/publick-place.vue'
import Chumka from './components/chumka.vue'
import Plane from './components/plane.vue'
import MoldFungus from './components/mold-fungus.vue'
import Tuberculosis from './components/tuberculosis.vue'
import Train from './components/train.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/info',
      component: Info
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/desinsection',
      component: Desinsection
    },
    {
      path: '/desinfection',
      component: Desinfection
    },
    {
      path: '/deratisation',
      component: Deratisation
    },
    {
      path: '/desodoration',
      component: Desodoration
    },
    {
      path: '/all-desinsection',
      component: AllDesinsection
    },
    {
      path: '/all-desinfection',
      component: AllDesinfection
    },
    {
      path: '/all-deratisation',
      component: AllDeratisation
    },
    {
      path: '/all-desodoration',
      component: AllDesodoration
    },
    {
      path: '/bedbugs',
      component: Bedbugs
    },
    {
      path: '/cockroach',
      component: Cockroach
    },
    {
      path: '/ant',
      component: Ant
    },
    {
      path: '/leatherman',
      component: Leatherman
    },
    {
      path: '/flea',
      component: Flea
    },
    {
      path: '/moth',
      component: Moth
    },
    {
      path: '/multiped',
      component: Multiped
    },
    {
      path: '/silverfish',
      component: Silverfish
    },
    {
      path: '/mosquito',
      component: Mosquito
    },
    {
      path: '/bark-beetle',
      component: BarkBeetle
    },
    {
      path: '/mite',
      component: Mite
    },
    {
      path: '/wasp',
      component: Wasp
    },
    {
      path: '/mole-cricket',
      component: MoleCricket
    },
    {
      path: '/fly',
      component: Fly
    },
    {
      path: '/hogweed',
      component: Hogweed
    },
    {
      path: '/rat',
      component: Rat
    },
    {
      path: '/mouse',
      component: Mouse
    },
    {
      path: '/mole',
      component: Mole
    },
    {
      path: '/hot-fog',
      component: HotFog
    },
    {
      path: '/cold-fog',
      component: ColdFog
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/covid19',
      component: Covid19
    },
    {
      path: '/bacteria',
      component: Bacteria
    },
    {
      path: '/rip',
      component: Rip
    },
    {
      path: '/flat',
      component: Flat
    },
    {
      path: '/lichen',
      component: Lichen
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/publick-place',
      component: PublickPlace
    },
    {
      path: '/chumka',
      component: Chumka
    },
    {
      path: '/plane',
      component: Plane
    },
    {
      path: '/mold-fungus',
      component: MoldFungus
    },
    {
      path: '/tuberculosis',
      component: Tuberculosis
    },
    {
      path: '/train',
      component: Train
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');