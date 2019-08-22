import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import { getDisplayValue } from '../../../element-ui-source/date-picker'
import { renderHook, joinWithSeperator } from '../../mixins'

export default (h, context, type) => {
  const tag = 'date-picker'
  const ctx = _.merge(context)
  ctx.props.type = type
  ctx.data.attrs.type = type
  const separator = _.get(ctx, 'props.rangeSeparator', options.rangeSeparator)
  const disValue = getDisplayValue(ctx, type)
  let childNodes = []
  if (disValue.constructor === Array) {
    childNodes = disValue
  } else {
    childNodes = [disValue]
  }
  const { readStateData, uuid } = helper.wrapContext(ctx, options.uuidAttribute, options.readStateClsPrefix, tag)
  const vnode = h('div', readStateData, joinWithSeperator(h, childNodes, separator))
  renderHook(ctx.parent, uuid, tag)
  return vnode
}
