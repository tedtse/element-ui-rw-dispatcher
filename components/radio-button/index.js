import RadioButtonDispatcher from './src/radio-button'

RadioButtonDispatcher.install = function (Vue) {
  Vue.component(RadioButtonDispatcher.name, RadioButtonDispatcher)
}
RadioButtonDispatcher.reset = function (options) {
  RadioButtonDispatcher.inject = [options.providerName]
}

export default RadioButtonDispatcher
