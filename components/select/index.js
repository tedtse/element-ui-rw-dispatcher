import ElSelectDispatcher from './src/select'

ElSelectDispatcher.install = function (Vue) {
  Vue.component(ElSelectDispatcher.name, ElSelectDispatcher)
}

export default ElSelectDispatcher
