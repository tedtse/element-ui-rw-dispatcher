import AutocompleteDispatcher from './src/autocomplete.vue'

AutocompleteDispatcher.install = function (Vue) {
  Vue.component(AutocompleteDispatcher.name, AutocompleteDispatcher)
}

export default AutocompleteDispatcher
