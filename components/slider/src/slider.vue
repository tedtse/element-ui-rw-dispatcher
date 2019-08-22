<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import { renderHook, joinWithSeperator } from '../../mixins'

const tag = 'slider'

const renderRules = [
  ...helper.genRenderRules('el-slider'),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const { readStateData, uuid } = helper.wrapContext(context, options.uuidAttribute, options.readStateClsPrefix, tag)
      const formatTooltip = _.get(context, 'props.formatTooltip', null)
      const separator = helper.getDispatcherProp(context, options.namespace, 'range-separator') || options.rangeSeparator
      const value = _.get(context, 'data.attrs.value', '')
      const tmp = value.constructor === Array ? value : [value]
      const labels = tmp.map(item => (
        typeof formatTooltip === 'function' ? formatTooltip(item) : item
      ))
      const vnode = h('div', readStateData, joinWithSeperator(h, labels, separator))
      renderHook(context.parent, uuid, tag)
      return vnode
    }
  }
]

export default {
  name: 'ElSliderDispatcher',
  functional: true,
  inject: [options.providerName],
  render (h, context) {
    const state = _.get(context, `injections.${options.providerName}.${options.providerState}`, '')
    const rule = renderRules.find(rule => rule.match(context, state, options))
    if (rule) {
      return rule.action(h, context, options)
    }
    return null
  }
}
</script>
