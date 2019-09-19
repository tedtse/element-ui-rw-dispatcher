import AutocompleteDispatcher from './src/autocomplete.vue'

AutocompleteDispatcher.install = function (Vue) {
  Vue.component(AutocompleteDispatcher.name, AutocompleteDispatcher)
}
AutocompleteDispatcher.reset = function (options) {
  AutocompleteDispatcher.inject = [options.providerName]
}

export default AutocompleteDispatcher
