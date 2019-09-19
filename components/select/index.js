import SelectDispatcher from './src/select'

SelectDispatcher.install = function (Vue) {
  Vue.component(SelectDispatcher.name, SelectDispatcher)
}
SelectDispatcher.reset = function (options) {
  SelectDispatcher.inject = [options.providerName]
}

export default SelectDispatcher
