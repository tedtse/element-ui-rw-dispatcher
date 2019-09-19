import DatePickerDispatcher from './src/date-picker.vue'

DatePickerDispatcher.install = function (Vue) {
  Vue.component(DatePickerDispatcher.name, DatePickerDispatcher)
}
DatePickerDispatcher.reset = function (options) {
  DatePickerDispatcher.inject = [options.providerName]
}

export default DatePickerDispatcher
