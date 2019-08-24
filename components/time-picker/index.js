import TimePickerDispatcher from '../date-picker/src/time-picker.vue'

TimePickerDispatcher.install = function (Vue) {
  Vue.component(TimePickerDispatcher.name, TimePickerDispatcher)
}

export default TimePickerDispatcher
