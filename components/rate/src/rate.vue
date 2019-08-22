<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'

const tag = 'el-rate'

const renderRules = [
  ...helper.genRenderRules(tag),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const { data, children } = context
      return h(tag, _.merge({}, data, {
        props: {
          disabled: true
        }
      }, children))
    }
  }
]

export default {
  name: 'ElRateDispatcher',
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
