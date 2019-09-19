import InputDispatcher from './src/input'

InputDispatcher.install = function (Vue) {
  Vue.component(InputDispatcher.name, InputDispatcher)
}
InputDispatcher.reset = function (options) {
  InputDispatcher.inject = [options.providerName]
}

export default InputDispatcher
