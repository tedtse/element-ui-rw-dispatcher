import ElCheckboxGroupDispatcher from './src/checkbox-group'

ElCheckboxGroupDispatcher.install = function (Vue) {
  Vue.component(ElCheckboxGroupDispatcher.name, ElCheckboxGroupDispatcher)
}

export default ElCheckboxGroupDispatcher
