import CheckboxGroupDispatcher from './src/checkbox-group'

CheckboxGroupDispatcher.install = function (Vue) {
  Vue.component(CheckboxGroupDispatcher.name, CheckboxGroupDispatcher)
}
CheckboxGroupDispatcher.reset = function (options) {
  CheckboxGroupDispatcher.inject = [options.providerName]
}

export default CheckboxGroupDispatcher
