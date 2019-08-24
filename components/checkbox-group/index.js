import CheckboxGroupDispatcher from './src/checkbox-group'

CheckboxGroupDispatcher.install = function (Vue) {
  Vue.component(CheckboxGroupDispatcher.name, CheckboxGroupDispatcher)
}

export default CheckboxGroupDispatcher
