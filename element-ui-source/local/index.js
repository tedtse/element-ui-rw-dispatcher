import _ from 'lodash'
import lang from './lang/zh-CN'

export const t = function (path) {
  return _.get(lang, path, '')
}
