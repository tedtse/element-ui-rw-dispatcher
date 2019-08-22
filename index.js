import ElSelectDispatcher from './components/select'
import ElInputDispatcher from './components/input'
import ElInputNumberDispatcher from './components/input-number'
import ElAutocompleteDispatcher from './components/autocomplete'
import ElSwitchDispatcher from './components/switch'
import ElDatePickerDispatcher from './components/date-picker'
import ElTimePickerDispatcher from './components/time-picker'
import ElTimeSelectDispatcher from './components/time-select'
import ElCheckboxDispatcher from './components/checkbox'
import ElCheckboxGroupDispatcher from './components/checkbox-group'
import ElCheckboxButtonDispatcher from './components/checkbox-button'
import ElRadioDispatcher from './components/radio'
import ElRadioGroupDispatcher from './components/radio-group'
import ElRadioButtonDispatcher from './components/radio-button'
import ElRateDispatcher from './components/rate'
import ElSliderDispatcher from './components/slider'

import packageJSON from './package.json'

export const SelectDispatcher = ElSelectDispatcher
export const InputDispatcher = ElInputDispatcher
export const InputNumberDispatcher = ElInputNumberDispatcher
export const AutocompleteDispatcher = ElAutocompleteDispatcher
export const SwitchDispatcher = ElSwitchDispatcher
export const DatePickerDispatcher = ElDatePickerDispatcher
export const TimePickerDispatcher = ElTimePickerDispatcher
export const TimeSelectDispatcher = ElTimeSelectDispatcher
export const CheckboxDispatcher = ElCheckboxDispatcher
export const CheckboxGroupDispatcher = ElCheckboxGroupDispatcher
export const CheckboxButtonDispatcher = ElCheckboxButtonDispatcher
export const RadioDispatcher = ElRadioDispatcher
export const RadioGroupDispatcher = ElRadioGroupDispatcher
export const RadioButtonDispatcher = ElRadioButtonDispatcher
export const RateDispatcher = ElRateDispatcher
export const SliderDispatcher = ElSliderDispatcher

const components = [
  SelectDispatcher,
  InputDispatcher,
  AutocompleteDispatcher,
  InputNumberDispatcher,
  SwitchDispatcher,
  DatePickerDispatcher,
  TimePickerDispatcher,
  TimeSelectDispatcher,
  CheckboxDispatcher,
  CheckboxGroupDispatcher,
  CheckboxButtonDispatcher,
  RadioDispatcher,
  RadioGroupDispatcher,
  RadioButtonDispatcher,
  RateDispatcher,
  SliderDispatcher
]

const install = function (Vue, opts = {}) {
  components.forEach(comp => {
    Vue.component(comp.name, comp)
  })
}

export default {
  version: packageJSON.version,
  install,
  SelectDispatcher,
  InputDispatcher,
  AutocompleteDispatcher,
  InputNumberDispatcher,
  SwitchDispatcher,
  DatePickerDispatcher,
  TimePickerDispatcher,
  TimeSelectDispatcher,
  CheckboxDispatcher,
  CheckboxGroupDispatcher,
  CheckboxButtonDispatcher,
  RadioDispatcher,
  RadioGroupDispatcher,
  RadioButtonDispatcher,
  RateDispatcher,
  SliderDispatcher
}
