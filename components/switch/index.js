import ElSwitchDispatcher from './src/switch.vue'

ElSwitchDispatcher.install = function (Vue) {
  Vue.component(ElSwitchDispatcher.name, ElSwitchDispatcher)
}

export default ElSwitchDispatcher
