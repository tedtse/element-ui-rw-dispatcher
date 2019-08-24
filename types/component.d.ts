import Vue from 'vue'

export declare class DispatcherComponent extends Vue {
  static install (vue: typeof Vue): void
}

export type DispatcherComponentSize = 'large' | 'medium' | 'small' | 'mini'
