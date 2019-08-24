import Vue, { ComponentOptions } from 'vue'
import OPTIONS, { Configuration } from './types/options'
const camelCase = require('camel-case')
const namespace = OPTIONS.namespace

export type RWState = 'write' | 'read'
export type VueClass<V> = {
  new (...args: any[]): V & Vue
} & typeof Vue
export type DecoratedClass = VueClass<Vue> & {
  __decorators__?: ((options: ComponentOptions<Vue>) => void)[]
}

export function RWDispacherProvide (key?: string | symbol) {
  return (target: Vue | typeof Vue, propertyKey?: any, descriptor?: PropertyDescriptor) => {
    const Ctor = typeof target === 'function'
      ? target as DecoratedClass
      : target.constructor as DecoratedClass
    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = []
    }
    Ctor.__decorators__.push(options => {
      let provide: any = options.provide
      if (typeof provide !== 'function' || !provide.managed) {
        const original = options.provide
        provide = options.provide = function (this: any) {
          let rv = Object.create(
            (typeof original === 'function' ? original.call(this) : original) || null
          )
          for (let i in provide.managed) {
            if (i === '__rwDispacherProvider__') {
              rv[provide.managed[i]] = this
            } else {
              rv[provide.managed[i]] = this[i]
            }
          }
          return rv
        }
        provide.managed = {}
      }
      provide.managed[propertyKey] = key || propertyKey
    })
  }
}

export class RWDispatcher extends Vue {
  [key: string]: any
  @RWDispacherProvide(`${camelCase(namespace)}Provider`)
  __rwDispacherProvider__ = this

  constructor () {
    super()
    this[`${camelCase(namespace)}State`] = 'write'
    this[`${camelCase(namespace)}Config`] = {}
  }
  setRWDispatcherState (state: RWState) {
    this[`${camelCase(namespace)}State`] = state
  }
  getRWDispatcherState (): RWState {
    return this[`${camelCase(namespace)}State`]
  }
  setRWDispatcherConfig (config: Configuration) {
    this[`${camelCase(namespace)}Config`] = config
  }
  getRWDispatcherConfig (): Configuration {
    return this[`${camelCase(namespace)}Config`]
  }
}
