import TimeSelectDispatcher from '../date-picker/src/time-select.vue'

TimeSelectDispatcher.install = function (Vue) {
  Vue.component(TimeSelectDispatcher.name, TimeSelectDispatcher)
}
TimeSelectDispatcher.reset = function (options) {
  TimeSelectDispatcher.inject = [options.providerName]
}

export default TimeSelectDispatcher
