export declare type Configuration = {
  namespace?: string
  activeText?: string
  inactiveText?: string
  separator?: string
  rangeSeparator?: string
  readStateRender?: object
  readStateClsPrefix?: string
  hiddenComponentRole?: string
  uuidAttribute?: string
  providerName?: string
  providerState?: string
}

export declare function setOptions (config: Configuration): void

declare const _options: Configuration
export default _options
