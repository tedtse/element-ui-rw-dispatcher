import Vue, { ComponentOptions } from 'vue'
import { Configuration } from './options'
export declare type RWState = 'write' | 'read'
export declare type VueClass<V> = {
  new(...args: any[]): V & Vue
} & typeof Vue
export declare type DecoratedClass = VueClass<Vue> & {
  __decorators__?: ((options: ComponentOptions<Vue>) => void)[]
}
export declare function RWDispacherProvide(key?: string | symbol): (target: Vue | import("vue").VueConstructor<Vue>, propertyKey?: any, descriptor?: PropertyDescriptor | undefined) => void
export declare class RWDispatcher extends Vue {
  [key: string]: any
  __rwDispacherProvider__: this
  constructor()
  setRWDispatcherState(state: RWState): void
  getRWDispatcherState(): RWState
  setRWDispatcherConfig(config: Configuration): void
  getRWDispatcherConfig(): Configuration
}
