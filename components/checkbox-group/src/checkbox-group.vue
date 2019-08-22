<script>
import _ from 'lodash'
import helper from 'rw-dispatcher-helper'
import options from '../../../options'
import { renderHook, joinWithSeperator } from '../../mixins'

const isCheckbox = component => {
  return _.get(component, 'componentOptions.tag', '').toLowerCase() === 'el-checkbox'
}

const isCheckboxButton = component => {
  return _.get(component, 'componentOptions.tag', '').toLowerCase() === 'el-checkbox-button'
}

const isHiddenComponent = component => {
  return _.get(component, 'data.attrs.role') === options.hiddenComponentRole
}

const renderRules = [
  ...helper.genRenderRules('el-checkbox-group'),
  {
    // 读状态且不存在 readStateRender 插槽
    match: (context, state) => (helper.isReadStateAndNotRener(context, state)),
    action: (h, context) => {
      const tag = 'checkbox-group'
      const { readStateData, uuid } = helper.wrapContext(context, options.uuidAttribute, options.readStateClsPrefix, tag)
      const value = _.get(context, 'data.attrs.value')
      const children = _.get(context, 'children', [])
      const childNodes = []
      children.forEach(component => {
        let label = _.get(component, 'data.attrs.label')
        if (isHiddenComponent(component) && value.includes(label)) {
          childNodes.push(component.children || label)
          return
        }
        label = _.get(component, 'componentOptions.propsData.label')
        if ((isCheckbox(component) || isCheckboxButton(component)) && value.includes(label)) {
          const append = component.componentOptions.children || []
          childNodes.push(...append)
        }
      })
      const separator = helper.getDispatcherProp(context, options.namespace, 'separator') || options.separator
      const vnode = h('div', readStateData, joinWithSeperator(h, childNodes, separator))
      renderHook(context.parent, uuid, tag)
      return vnode
    }
  }
]

export default {
  name: 'ElCheckboxGroupDispatcher',
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
