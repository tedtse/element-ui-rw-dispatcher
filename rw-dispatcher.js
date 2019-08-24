import * as tslib from "tslib"
import Vue from 'vue'
import OPTIONS from './options'
const camelCase = require('camel-case')

const namespace = OPTIONS.namespace

export function RWDispacherProvide(key) {
  return (target, propertyKey, descriptor) => {
    const Ctor = typeof target === 'function'
      ? target
      : target.constructor
    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = []
    }
    Ctor.__decorators__.push(options => {
      let provide = options.provide;
      if (typeof provide !== 'function' || !provide.managed) {
        const original = options.provide
        provide = options.provide = function () {
          let rv = Object.create((typeof original === 'function' ? original.call(this) : original) || null)
          for (let i in provide.managed) {
            if (i === '__rwDispacherProvider__') {
              rv[provide.managed[i]] = this
            }
            else {
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
  constructor() {
    super()
    this.__rwDispacherProvider__ = this
    this[`${camelCase(namespace)}State`] = 'write'
    this[`${camelCase(namespace)}Config`] = {}
  }
  setRWDispatcherState(state) {
    this[`${camelCase(namespace)}State`] = state
  }
  getRWDispatcherState() {
    return this[`${camelCase(namespace)}State`]
  }
  setRWDispatcherConfig(config) {
    this[`${camelCase(namespace)}Config`] = config
  }
  getRWDispatcherConfig() {
    return this[`${camelCase(namespace)}Config`]
  }
}

tslib.__decorate([
  RWDispacherProvide(`${camelCase(namespace)}Provider`)
], RWDispatcher.prototype, "__rwDispacherProvider__", void 0)
