import ElRadioDispatcher from './src/radio'

ElRadioDispatcher.install = function (Vue) {
  Vue.component(ElRadioDispatcher.name, ElRadioDispatcher)
}

export default ElRadioDispatcher
