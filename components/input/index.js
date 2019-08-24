import InputDispatcher from './src/input'

InputDispatcher.install = function (Vue) {
  Vue.component(InputDispatcher.name, InputDispatcher)
}

export default InputDispatcher
