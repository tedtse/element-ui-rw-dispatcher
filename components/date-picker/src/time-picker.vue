<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import render from './render'

const renderRules = [
  ...helper.genRenderRules('el-time-picker'),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const isRange = _.get(context, 'props.isRange')
      return render(h, context, isRange !== undefined ? 'timerange' : 'time')
    }
  }
]

export default {
  name: 'ElTimePickerDispatcher',
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
