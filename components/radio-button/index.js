import RadioButtonDispatcher from './src/radio-button'

RadioButtonDispatcher.install = function (Vue) {
  Vue.component(RadioButtonDispatcher.name, RadioButtonDispatcher)
}

export default RadioButtonDispatcher
