import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import { getDisplayValue } from '../../../element-ui-source/date-picker'
import { renderHook, joinWithSeperator } from '../../mixins'

export default (h, context, type) => {
  const tag = 'date-picker'
  const localConfig = _.get(context, `injections.${options.providerName}.${options.providerConfig}`, {})
  context.props.type = type
  context.data.attrs.type = type
  // const rangeSeparator = _.get(context, 'props.rangeSeparator', localConfig.rangeSeparator || options.rangeSeparator)
  const rangeSeparator = _.get(context, 'props.rangeSeparator') ||
    helper.getDispatcherProp(context, options.namespace, 'range-separator') ||
    localConfig.rangeSeparator ||
    options.rangeSeparator
  const disValue = getDisplayValue(context, type)
  let childNodes = []
  if (disValue instanceof Array) {
    childNodes = disValue
  } else {
    childNodes = [disValue]
  }
  const { readStateData, uuid } = helper.wrapContext(context, options.uuidAttribute, options.readStateClsPrefix, tag, '--')
  const vnode = h('div', readStateData, joinWithSeperator(h, childNodes, rangeSeparator))
  renderHook(context.parent, uuid, tag, _.get(context, 'data.attrs.size'))
  return vnode
}
