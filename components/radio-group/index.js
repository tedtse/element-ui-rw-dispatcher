import ElRadioGroupDispatcher from './src/radio-group'

ElRadioGroupDispatcher.install = function (Vue) {
  Vue.component(ElRadioGroupDispatcher.name, ElRadioGroupDispatcher)
}

export default ElRadioGroupDispatcher
