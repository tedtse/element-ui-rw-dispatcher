import RadioDispatcher from './src/radio'

RadioDispatcher.install = function (Vue) {
  Vue.component(RadioDispatcher.name, RadioDispatcher)
}
RadioDispatcher.reset = function (options) {
  RadioDispatcher.inject = [options.providerName]
}

export default RadioDispatcher
