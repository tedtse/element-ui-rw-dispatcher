<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import hiddenComponent from '../../hidden-component'
import { renderHook } from '../../mixins'

const renderRules = [
  ...helper.genRenderRules('el-checkbox-button'),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const tag = 'checkbox-button'
      const { readStateData, uuid } = helper.wrapContext(context, options.uuidAttribute, options.readStateClsPrefix, tag)
      const { label, value } = _.get(context, 'data.attrs', {})
      const data = _.merge({}, readStateData, { attrs: { label } })
      let vnode
      if (value === undefined || label !== value) {
        vnode = hiddenComponent(h, context, data)
      } else {
        vnode = h('div', data, context.children)
      }
      renderHook(context.parent, uuid, tag)
      return vnode
    }
  }
]

export default {
  name: 'ElCheckboxButtonDispatcher',
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
