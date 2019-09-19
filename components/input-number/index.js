import InputNumberDispatcher from './src/input-number'

InputNumberDispatcher.install = function (Vue) {
  Vue.component(InputNumberDispatcher.name, InputNumberDispatcher)
}
InputNumberDispatcher.reset = function (options) {
  InputNumberDispatcher.inject = [options.providerName]
}

export default InputNumberDispatcher
