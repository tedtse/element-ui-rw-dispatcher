import CheckboxButtonDispatcher from './src/checkbox-button'

CheckboxButtonDispatcher.install = function (Vue) {
  Vue.component(CheckboxButtonDispatcher.name, CheckboxButtonDispatcher)
}
CheckboxButtonDispatcher.reset = function (options) {
  CheckboxButtonDispatcher.inject = [options.providerName]
}

export default CheckboxButtonDispatcher
