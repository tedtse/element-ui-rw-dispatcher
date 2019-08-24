import RadioDispatcher from './src/radio'

RadioDispatcher.install = function (Vue) {
  Vue.component(RadioDispatcher.name, RadioDispatcher)
}

export default RadioDispatcher
