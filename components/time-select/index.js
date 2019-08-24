import TimeSelectDispatcher from '../date-picker/src/time-select.vue'

TimeSelectDispatcher.install = function (Vue) {
  Vue.component(TimeSelectDispatcher.name, TimeSelectDispatcher)
}

export default TimeSelectDispatcher
