import DatePickerDispatcher from './src/date-picker.vue'

DatePickerDispatcher.install = function (Vue) {
  Vue.component(DatePickerDispatcher.name, DatePickerDispatcher)
}

export default DatePickerDispatcher
