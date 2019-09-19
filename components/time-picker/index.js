import TimePickerDispatcher from '../date-picker/src/time-picker.vue'

TimePickerDispatcher.install = function (Vue) {
  Vue.component(TimePickerDispatcher.name, TimePickerDispatcher)
}
TimePickerDispatcher.reset = function (options) {
  TimePickerDispatcher.inject = [options.providerName]
}

export default TimePickerDispatcher
