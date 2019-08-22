import ElTimePickerDispatcher from '../date-picker/src/time-picker.vue'

ElTimePickerDispatcher.install = function (Vue) {
  Vue.component(ElTimePickerDispatcher.name, ElTimePickerDispatcher)
}

export default ElTimePickerDispatcher
