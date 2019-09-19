import CheckboxDispatcher from './src/checkbox'

CheckboxDispatcher.install = function (Vue) {
  Vue.component(CheckboxDispatcher.name, CheckboxDispatcher)
}
CheckboxDispatcher.reset = function (options) {
  CheckboxDispatcher.inject = [options.providerName]
}

export default CheckboxDispatcher
