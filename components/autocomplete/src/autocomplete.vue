<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import { renderHook } from '../../mixins'

const tag = 'autocomplete'

const renderRules = [
  ...helper.genRenderRules(`el-${tag}`),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const { readStateData, uuid } = helper.wrapContext(context, options.uuidAttribute, options.readStateClsPrefix, tag, '--')
      const vnode = h('div', readStateData, _.get(context, 'data.attrs.value', ''))
      renderHook(context.parent, uuid, tag, _.get(context, 'data.attrs.size'))
      return vnode
    }
  }
]

export default {
  name: 'ElAutocompleteDispatcher',
  functional: true,
  inject: [options.providerName],
  render (h, context) {
    const state = helper.getDispatcherProp(context, options.namespace, 'state') ||
      _.get(context, `injections.${options.providerName}.${options.providerState}`, '')
    const rule = renderRules.find(rule => rule.match(context, state, options))
    if (rule) {
      return rule.action(h, context, options)
    }
    return null
  }
}
</script>
