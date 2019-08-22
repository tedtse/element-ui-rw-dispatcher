<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import { renderHook } from '../../mixins'

const tag = 'switch'

const renderRules = [
  ...helper.genRenderRules(`el-${tag}`),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const { readStateData, uuid } = helper.wrapContext(context, options.uuidAttribute, options.readStateClsPrefix, tag)
      const { activeText, inactiveText, activeValue, inactiveValue, activeColor, inactiveColor } = _.get(context, 'props')
      const value = _.get(context, 'data.attrs.value')
      const trueValue = activeText !== undefined ? activeText : (activeValue !== undefined ? activeValue : options.activeText)
      const falseValue = inactiveText !== undefined ? inactiveText : (inactiveValue !== undefined ? inactiveValue : options.inactiveText)
      const labelNode = value === (activeValue || true)
        ? h('span', { style: { color: activeColor } }, trueValue)
        : h('span', { style: { color: inactiveColor } }, falseValue)
      const vnode = h('div', readStateData, [labelNode])
      renderHook(context.parent, uuid, tag)
      return vnode
    }
  }
]

export default {
  name: 'ElSwitchDispatcher',
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
