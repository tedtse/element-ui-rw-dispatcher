import RadioGroupDispatcher from './src/radio-group'

RadioGroupDispatcher.install = function (Vue) {
  Vue.component(RadioGroupDispatcher.name, RadioGroupDispatcher)
}
RadioGroupDispatcher.reset = function (options) {
  RadioGroupDispatcher.inject = [options.providerName]
}

export default RadioGroupDispatcher
