import RateDispatcher from './src/rate.vue'

RateDispatcher.install = function (Vue) {
  Vue.component(RateDispatcher.name, RateDispatcher)
}

export default RateDispatcher
