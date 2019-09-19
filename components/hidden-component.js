import _ from 'lodash'
import options from '../options'

export default (h, context, readStateData = {}) => {
  const { children } = context
  return h('div', _.merge({}, readStateData, {
    style: {
      display: 'none'
    },
    attrs: {
      role: options.hiddenComponentRole
    }
  }), children)
}
