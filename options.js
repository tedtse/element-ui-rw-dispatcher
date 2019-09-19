import merge from 'lodash/merge'
import camelCase from 'camel-case'
import kebebCase from 'param-case'

let baseConfig = {
  namespace: 'rw-dispatcher',
  activeText: '是',
  inactiveText: '否',
  separator: '|',
  rangeSeparator: '-',
  readStateRender: {}
}

const getOptions = () => {
  return {
    ...baseConfig,
    readStateClsPrefix: kebebCase(`${baseConfig.namespace}-el`),
    hiddenComponentRole: kebebCase(`${baseConfig.namespace}-hidden-component`),
    uuidAttribute: kebebCase(`${baseConfig.namespace}-uuid`),
    providerName: camelCase(`${baseConfig.namespace}-provider`),
    providerState: camelCase(`${baseConfig.namespace}-state`),
    providerConfig: camelCase(`${baseConfig.namespace}-config`)
  }
}

let _options = getOptions()

export const setOptions = (config = {}) => {
  merge(baseConfig, config)
  _options.namespace = baseConfig.namespace
  _options.activeText = baseConfig.activeText
  _options.inactiveText = baseConfig.inactiveText
  _options.separator = baseConfig.separator
  _options.rangeSeparator = baseConfig.rangeSeparator
  _options.readStateRender = baseConfig.readStateRender
  _options.readStateClsPrefix = kebebCase(`${baseConfig.namespace}-el`)
  _options.hiddenComponentRole = kebebCase(`${baseConfig.namespace}-hidden-component`)
  _options.uuidAttribute = kebebCase(`${baseConfig.namespace}-uuid`)
  _options.providerName = camelCase(`${baseConfig.namespace}-provider`)
  _options.providerState = camelCase(`${baseConfig.namespace}-state`)
  _options.providerConfig = camelCase(`${baseConfig.namespace}-config`)
}

export default _options
