import RadioGroupDispatcher from './src/radio-group'

RadioGroupDispatcher.install = function (Vue) {
  Vue.component(RadioGroupDispatcher.name, RadioGroupDispatcher)
}

export default RadioGroupDispatcher
