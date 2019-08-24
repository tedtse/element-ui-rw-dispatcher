import _ from 'lodash/core'
const camelCase = require('camel-case')
const kebebCase = require('param-case')

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
    providerState: camelCase(`${baseConfig.namespace}-state`)
  }
}

let _options = getOptions()

export const setOptions = (config) => {
  _.merge(baseConfig, config)
  _options = getOptions()
}

export default _options
