import SelectDispatcher from './src/select'

SelectDispatcher.install = function (Vue) {
  Vue.component(SelectDispatcher.name, SelectDispatcher)
}

export default SelectDispatcher
