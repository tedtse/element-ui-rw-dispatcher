import SliderDispatcher from './src/slider.vue'

SliderDispatcher.install = function(Vue) {
  Vue.component(SliderDispatcher.name, SliderDispatcher)
}

export default SliderDispatcher
