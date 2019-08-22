import ElRateDispatcher from './src/rate.vue'

ElRateDispatcher.install = function (Vue) {
  Vue.component(ElRateDispatcher.name, ElRateDispatcher)
}

export default ElRateDispatcher
