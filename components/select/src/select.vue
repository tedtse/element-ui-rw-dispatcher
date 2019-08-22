<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import { renderHook, joinWithSeperator } from '../../mixins'

const isOption = component => {
  return component.componentOptions.tag.toLowerCase() === 'el-option'
}
const isOptionGroup = component => {
  return component.componentOptions.tag.toLowerCase() === 'el-option-group'
}

const traverse = (vnodes = [], values) => {
  const result = []
  vnodes.forEach(item => {
    if (!item.componentOptions) {
      return
    }
    if (isOptionGroup(item)) {
      result.push(...traverse(item.componentOptions.children, values))
    } else if (isOption(item)) {
      const propsData = item.componentOptions.propsData
      if (values.includes(propsData.value)) {
        result.push(propsData)
      }
    }
  })
  return result
}

const getLabels = (data, children) => {
  const [value, allowCreate] = [data.attrs.value, data.attrs.hasOwnProperty('allow-create')]
  const values = value.constructor === Array ? value : [value]
  const matcher = traverse(children, values)
  const matcherValueMap = matcher.map(item => item.value)
  const rest = allowCreate
    ? values.filter(item => !matcherValueMap.includes(item))
    : []
  return [
    ...matcher.map(item => item.label),
    ...rest
  ]
}

const tag = 'select'

const renderRules = [
  ...helper.genRenderRules(`el-${tag}`),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const { readStateData, uuid } = helper.wrapContext(context, options.uuidAttribute, options.readStateClsPrefix, tag)
      const { data, children } = context
      const separator = helper.getDispatcherProp(context, options.namespace, 'separator') || options.separator
      const vnode = h('div', readStateData, joinWithSeperator(h, getLabels(data, children), separator))
      renderHook(context.parent, uuid, tag)
      return vnode
    }
  }
]

export default {
  name: 'ElSelectDispatcher',
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
