import _ from 'lodash'
import helper, { TickEmitter } from 'rw-dispatcher-helper'
// import TickEmitter from 'rw-dispatcher-helper/tick-emitter'
import options from '../options'

const tickEmitter = new TickEmitter()

export const renderHook = (parent, uuid, tag) => {
  tickEmitter.once(uuid, () => {
    const formItems = helper.findFormItems(parent)
    if (!formItems.length) {
      return
    }
    const { uuidVnode, formItem } = helper.findComponentByUuid(formItems, options.uuidAttribute, uuid)
    if (!uuidVnode || !formItem) {
      return
    }
    const selfSize = _.get(uuidVnode, 'data.attrs.size')
    if (selfSize) {
      return
    }
    const formItemSize = _.get(formItem, 'size')
    const formSize = _.get(formItem, 'form.size')
    const size = formItemSize || formSize
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
