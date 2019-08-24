import Vue from 'vue'

import { RWDispatcher as ElRWDispatcher } from './rw-dispatcher'
import { InputDispatcher as ElInputDispatcher } from './input'
import { InputNumberDispatcher as ElInputNumberDispatcher } from './input-number'
import { AutocompleteDispatcher as ElAutocompleteDispatcher } from './autocomplete'
import { SelectDispatcher as ElSelectDispatcher } from './select'
import { DatePickerDispatcher as ElDatePickerDispatcher } from './date-picker'
import { TimePickerDispatcher as ElTimePickerDispatcher } from './time-picker'
import { TimeSelectDispatcher as ElTimeSelectDispatcher } from './time-select'
import { SwitchDispatcher as ElSwitchDispatcher } from './switch'
import { CheckboxDispatcher as ElCheckboxDispatcher } from './checkbox'
import { CheckboxGroupDispatcher as ElCheckboxGroupDispatcher } from './checkbox-group'
import { CheckboxButtonDispatcher as ElCheckboxButtonDispatcher } from './checkbox-button'
import { RadioDispatcher as ElRadioDispatcher } from './radio'
import { RadioGroupDispatcher as ElRadioGroupDispatcher } from './radio-group'
import { RadioButtonDispatcher as ElRadioButtonDispatcher } from './radio-button'
import { RateDispatcher as ElRateDispatcher } from './rate'
import { SliderDispatcher as ElSliderDispatcher } from './slider'

export function install (vue: typeof Vue, options: any): void

export class RWDispatcher extends ElRWDispatcher {}
export class InputDispatcher extends ElInputDispatcher {}
export class InputNumberDispatcher extends ElInputNumberDispatcher {}
export class AutocompleteDispatcher extends ElAutocompleteDispatcher {}
export class SelectDispatcher extends ElSelectDispatcher {}
export class DatePickerDispatcher extends ElDatePickerDispatcher {}
export class TimePickerDispatcher extends ElTimePickerDispatcher {}
export class TimeSelectDispatcher extends ElTimeSelectDispatcher {}
export class SwitchDispatcher extends ElSwitchDispatcher {}
export class CheckboxDispatcher extends ElCheckboxDispatcher {}
export class CheckboxGroupDispatcher extends ElCheckboxGroupDispatcher {}
export class CheckboxButtonDispatcher extends ElCheckboxButtonDispatcher {}
export class RadioDispatcher extends ElRadioDispatcher {}
export class RadioGroupDispatcher extends ElRadioGroupDispatcher {}
export class RadioButtonDispatcher extends ElRadioButtonDispatcher {}
export class RateDispatcher extends ElRateDispatcher {}
export class SliderDispatcher extends ElSliderDispatcher {}
