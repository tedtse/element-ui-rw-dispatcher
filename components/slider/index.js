import SliderDispatcher from './src/slider.vue'

SliderDispatcher.install = function (Vue) {
  Vue.component(SliderDispatcher.name, SliderDispatcher)
}
SliderDispatcher.reset = function (options) {
  SliderDispatcher.inject = [options.providerName]
}

export default SliderDispatcher
