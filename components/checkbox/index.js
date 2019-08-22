import ElCheckboxDispatcher from './src/checkbox'

ElCheckboxDispatcher.install = function (Vue) {
  Vue.component(ElCheckboxDispatcher.name, ElCheckboxDispatcher)
}

export default ElCheckboxDispatcher
