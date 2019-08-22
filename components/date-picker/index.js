import ElDatePickerDispatcher from './src/date-picker.vue'

ElDatePickerDispatcher.install = function (Vue) {
  Vue.component(ElDatePickerDispatcher.name, ElDatePickerDispatcher)
}

export default ElDatePickerDispatcher
