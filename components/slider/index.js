import ElSliderDispatcher from './src/slider.vue'

ElSliderDispatcher.install = function(Vue) {
  Vue.component(ElSliderDispatcher.name, ElSliderDispatcher)
}

export default ElSliderDispatcher
