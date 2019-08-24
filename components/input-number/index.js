import InputNumberDispatcher from './src/input-number'

InputNumberDispatcher.install = function (Vue) {
  Vue.component(InputNumberDispatcher.name, InputNumberDispatcher)
}

export default InputNumberDispatcher
