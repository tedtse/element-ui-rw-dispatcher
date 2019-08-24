import CheckboxButtonDispatcher from './src/checkbox-button'

CheckboxButtonDispatcher.install = function (Vue) {
  Vue.component(CheckboxButtonDispatcher.name, CheckboxButtonDispatcher)
}

export default CheckboxButtonDispatcher
