import ElCheckboxButtonDispatcher from './src/checkbox-button'

ElCheckboxButtonDispatcher.install = function (Vue) {
  Vue.component(ElCheckboxButtonDispatcher.name, ElCheckboxButtonDispatcher)
}

export default ElCheckboxButtonDispatcher
