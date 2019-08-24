import SwitchDispatcher from './src/switch.vue'

SwitchDispatcher.install = function (Vue) {
  Vue.component(SwitchDispatcher.name, SwitchDispatcher)
}

export default SwitchDispatcher
