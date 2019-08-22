<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import hiddenComponent from '../../hidden-component'
import { renderHook } from '../../mixins'

const renderRules = [
  ...helper.genRenderRules('el-checkbox'),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const tag = 'checkbox'
      const { label, value } = _.get(context, 'data.attrs', {})
      const { readStateData, uuid } = helper.wrapContext(context, options.uuidAttribute, options.readStateClsPrefix, tag)
      const data = _.merge({}, readStateData, { attrs: { label } })
      let vnode
      if (value) {
        vnode = h('div', data, context.children || label)
      } else {
        vnode = hiddenComponent(h, context, data)
      }
      renderHook(context.parent, uuid, tag)
      return vnode
    }
  }
]

export default {
  name: 'ElCheckboxDispatcher',
  functional: true,
  inject: [options.providerName],
  render(h, context) {
    const state = _.get(context, `injections.${options.providerName}.${options.providerState}`, '')
    const rule = renderRules.find(rule => rule.match(context, state, options))
    if (rule) {
      return rule.action(h, context, options)
    }
    return null
  }
}
</script>
