import ElAutocompleteDispatcher from './src/autocomplete.vue'

ElAutocompleteDispatcher.install = function (Vue) {
  Vue.component(ElAutocompleteDispatcher.name, ElAutocompleteDispatcher)
}

export default ElAutocompleteDispatcher
