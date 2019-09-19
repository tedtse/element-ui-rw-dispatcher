import _ from 'lodash'
import helper, { TickEmitter } from 'rw-dispatcher-helper'
import options from '../options'

const tickEmitter = new TickEmitter()

export const renderHook = (parent, uuid, tag, selfSize) => {
  tickEmitter.once(uuid, () => {
    const tagName = 'ElFormItem'
    const formItems = helper.findFormItems(parent, tagName)
    if (!formItems.length) {
      return
    }
    const { uuidVnode, formItem } = helper.findComponentByUUID(formItems, options.uuidAttribute, uuid, tagName)
    if (!uuidVnode || !formItem) {
      return
    }
    const formItemSize = _.get(formItem, 'size')
    const formSize = _.get(formItem, 'form.size')
    const size = selfSize || formItemSize || formSize
    if (size) {
      uuidVnode.elm.classList.add(`${options.readStateClsPrefix}-${tag}--${size}`)
    }
  })
}

export const joinWithSeperator = (h, value, separator) => {
  const result = []
  value.forEach((item, index) => {
    result.push(item)
    if (index !== value.length - 1) {
      result.push(h('span', {
        attrs: { 'class': `${options.readStateClsPrefix}-separator` }
      }, separator))
    }
  })
  return result
}
