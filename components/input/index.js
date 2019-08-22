import ElInputDispatcher from './src/input'

ElInputDispatcher.install = function (Vue) {
  Vue.component(ElInputDispatcher.name, ElInputDispatcher)
}

export default ElInputDispatcher
