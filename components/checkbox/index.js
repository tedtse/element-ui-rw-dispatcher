import CheckboxDispatcher from './src/checkbox'

CheckboxDispatcher.install = function (Vue) {
  Vue.component(CheckboxDispatcher.name, CheckboxDispatcher)
}

export default CheckboxDispatcher
