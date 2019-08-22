import ElTimeSelectDispatcher from '../date-picker/src/time-select.vue'

ElTimeSelectDispatcher.install = function (Vue) {
  Vue.component(ElTimeSelectDispatcher.name, ElTimeSelectDispatcher)
}

export default ElTimeSelectDispatcher
