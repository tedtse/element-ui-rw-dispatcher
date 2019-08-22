import ElInputNumberDispatcher from './src/input-number'

ElInputNumberDispatcher.install = function (Vue) {
  Vue.component(ElInputNumberDispatcher.name, ElInputNumberDispatcher)
}

export default ElInputNumberDispatcher
