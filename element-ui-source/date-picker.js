import _ from 'lodash'
import { isDateObject, formatDate, parseDate, getWeekNumber } from './utils/date-util'

export const DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  week: 'yyyywWW',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  monthrange: 'yyyy-MM',
  datetimerange: 'yyyy-MM-dd HH:mm:ss',
  year: 'yyyy'
}

export const HAVE_TRIGGER_TYPES = [
  'date',
  'datetime',
  'time',
  'time-select',
  'week',
  'month',
  'year',
  'daterange',
  'monthrange',
  'timerange',
  'datetimerange',
  'dates'
]

export const DATE_FORMATTER = function(value, format) {
  if (format === 'timestamp') return value.getTime()
  return formatDate(value, format)
}

export const DATE_PARSER = function(text, format) {
  if (format === 'timestamp') return new Date(Number(text))
  return parseDate(text, format)
}

export const RANGE_FORMATTER = function(value, format) {
  if (Array.isArray(value) && value.length === 2) {
    const start = value[0]
    const end = value[1]
    if (start && end) {
      return [DATE_FORMATTER(start, format), DATE_FORMATTER(end, format)]
    }
  }
  return ''
}

export const RANGE_PARSER = function(array, format, separator) {
  if (!Array.isArray(array)) {
    array = array.split(separator)
  }
  if (array.length === 2) {
    const range1 = array[0]
    const range2 = array[1]
    return [DATE_PARSER(range1, format), DATE_PARSER(range2, format)]
  }
  return []
}

export const TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter(value) {
      if (!value) return ''
      return '' + value
    },
    parser(text) {
      if (text === undefined || text === '') return null
      return text
    }
  },
  week: {
    formatter(value, format) {
      let week = getWeekNumber(value)
      let month = value.getMonth()
      const trueDate = new Date(value)
      if (week === 1 && month === 11) {
        trueDate.setHours(0, 0, 0, 0)
        trueDate.setDate(trueDate.getDate() + 3 - ((trueDate.getDay() + 6) % 7))
      }
      let date = formatDate(trueDate, format)
      date = /WW/.test(date)
        ? date.replace(/WW/, week < 10 ? '0' + week : week)
        : date.replace(/W/, week)
      return date
    },
    parser(text, format) {
      // parse as if a normal date
      return TYPE_VALUE_RESOLVER_MAP.date.parser(text, format)
    }
  },
  date: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  datetime: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  daterange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  monthrange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  datetimerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  timerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  time: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  month: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  year: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  number: {
    formatter(value) {
      if (!value) return ''
      return '' + value
    },
    parser(text) {
      let result = Number(text)
      if (!isNaN(text)) {
        return result
      } else {
        return null
      }
    }
  },
  dates: {
    formatter(value, format) {
      return value.map(date => DATE_FORMATTER(date, format))
    },
    parser(value, format) {
      return (typeof value === 'string' ? value.split(', ') : value).map(date =>
        date instanceof Date ? date : DATE_PARSER(date, format)
      )
    }
  }
}

export const PLACEMENT_MAP = {
  left: 'bottom-start',
  center: 'bottom',
  right: 'bottom-end'
}

const formatAsFormatAndType = (value, customFormat, type) => {
  if (!value) return null
  const formatter = (
    TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']
  ).formatter
  const format = customFormat || DEFAULT_FORMATS[type]
  return formatter(value, format)
}

const parseAsFormatAndType = () => {}

const getParsedValue = context => {
  const { props } = context
  if (!props.value) return props.value // component value is not set
  if (props.type === 'time-select') return props.value
  const valueIsDateObject =
    isDateObject(props.value) ||
    (Array.isArray(props.value) && props.value.every(isDateObject))
  if (valueIsDateObject) {
    return props.value
  }
  if (props.valueFormat) {
    return (
      parseAsFormatAndType(
        props.value,
        props.valueFormat,
        props.type,
        props.rangeSeparator
      ) || props.value
    )
  }
  // NOTE: deal with common but incorrect usage, should remove in next major version
  // user might provide string / timestamp without value-format, coerce them into date (or array of date)
  return Array.isArray(props.value)
    ? props.value.map(val => new Date(val))
    : new Date(props.value)
}

export const getDisplayValue = (context, type = 'date') => {
  const { props } = context
  const userInput = _.get(context, 'attrs.userInput', null)
  const formattedValue = formatAsFormatAndType(
    getParsedValue(context),
    props.format,
    props.type || type,
    props.rangeSeparator
  )
  if (Array.isArray(userInput)) {
    return [
      userInput[0] || (formattedValue && formattedValue[0]) || '',
      userInput[1] || (formattedValue && formattedValue[1]) || ''
    ]
  } else if (userInput !== null) {
    return userInput
  } else if (formattedValue) {
    return props.type === 'dates' ? formattedValue.join(', ') : formattedValue
  } else {
    return ''
  }
}
