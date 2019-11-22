# element-ui-rw-dispatcher
基于 ElementUI form 组件的分发器，这样表单的编辑和详情就可以一套代码完成，节省了开发成本。

文档地址: [http://xiepeng.cc/rw-dispatcher/#/](http://xiepeng.cc/rw-dispatcher/#/)

### 安装
npm 安装
```
npm i element-ui-rw-dispatcher
```
yarn 安装
```
yarn add element-ui-rw-dispatcher
```

### 引入
开发者可以选择完整引入和按需引入。下面介绍完整引入

在 main.js 中写入以下内容：

```
import Vue from 'vue'
import ElementUiRwDispatcher from 'element-ui-rw-dispatcher'
import 'element-ui-rw-dispatcher/styles/index.scss'
import App from './App.vue'

Vue.use(ElementUiRwDispatcher)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 使用
使用分发器比较使用表单只多了三步：

- 添加 provide 属性，其中 rwDispatcherProvider 的值指向自身

- data属性中添加 rwDispatcherState 做状态管理（read or write）

- 原来表单元素的标签加一个 -dispatcher 后缀，其配置保持不变

```html
<template>
  <el-form ref="form" :model="form" label-width="80px" size="small">
    <el-form-item label="活动名称">
      <el-input-dispatcher v-model="form.name" />
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select-dispatcher v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai" />
        <el-option label="区域二" value="beijing" />
      </el-select-dispatcher>
    </el-form-item>
    <div style="text-align: right">
      <el-button
        v-show="rwDispatcherState === 'write'"
        type="primary"
        size="small"
        @click="toggleState"
      >编辑</el-button>
      <el-button
        v-show="rwDispatcherState === 'read'"
        type="primary"
        size="small"
        @click="toggleState"
      >详情</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  provide () {
    return {
      rwDispatcherProvider: this
    }
  },
  data () {
    return {
      rwDispatcherState: 'write',
      form: {
        name: '618电器折扣日',
        region: 'shanghai'
      }
    }
  },
  methods: {
    toggleState () {
      if (this.rwDispatcherState === 'write') {
        this.rwDispatcherState = 'read'
      } else {
        this.rwDispatcherState = 'write'
      }
    }
  }
}
</script>
```

## 全局配置
全局配置在插件初始化时配置。

### 使用
```
import Vue from 'vue'
import ElementUiRwDispatcher from 'element-ui-rw-dispatcher'
import 'element-ui-rw-dispatcher/styles/index.scss'

Vue.use(ElementUiRwDispatcher, {
  namespace: 'rw-dispatcher',
  activeText: '是',
  inactiveText: '否',
  separator: '|',
  rangeSeparator: '-',
  readStateRender: {
    // ...
  }
})
```

### 配置参数
<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>namespace</td>
      <td>
        命名空间，read 状态渲染函数、状态管理、局部配置等参数的前缀。<br />
        使用过程中如果有参数冲突时可以改这个值。
      </td>
      <td>String</td>
      <td>rw-dispatcher</td>
    </tr>
    <tr>
      <td>activeText</td>
      <td>值为真时的文字描述</td>
      <td>String</td>
      <td>是</td>
    </tr>
    <tr>
      <td>inactiveText</td>
      <td>值为假时的文字描述</td>
      <td>String</td>
      <td>否</td>
    </tr>
    <tr>
      <td>separator</td>
      <td>
        分隔符，组件有多个值且是并列关系，read 状态渲染时用该符号间隔。<br />
        如组件的值为 ['Tom', 'Jerry']，显示 'Tom|Jerry'。
      </td>
      <td>String</td>
      <td>|</td>
    </tr>
    <tr>
      <td>rangeSeparator</td>
      <td>
        连接符，组件有多个值且是区间关系，read 状态渲染时用该符号连接。<br />
        如组件的值为 ['2019/06/15', '2019/08/15']，显示 '2019/06/15-2019/08/15'。
      </td>
      <td>String</td>
      <td>-</td>
    </tr>
    <tr>
      <td>readStateRender</td>
      <td>read 状态自定义渲染函数。具体配置如下</td>
      <td>Object</td>
      <td>{}</td>
    </tr>
  </tbody>
</table>

### 自定义渲染函数
所有自定义函数的参数均为 (h, context) [Vue 函数式组件](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)。具体配置如下：

| 可配置项 | 说明 | 类型 |
| ---- | -------- | ---- |
| elInput | ElInputDispatcher 自定义渲染函数 | Function |
| elInputNumber | InputNumberDispatcher 自定义渲染函数 | Function |
| elAutocomplete | ElAutocompleteDispatcher 自定义渲染函数 | Function |
| elSelect | ElSelectDispatcher 自定义渲染函数 | Function |
| elCheckbox | ElCheckboxDispatcher 自定义渲染函数 | Function |
| elCheckboxButton | ElCheckboxButtonDispatcher 自定义渲染函数 | Function |
| elCheckboxGroup | ElCheckboxGroupDispatcher 自定义渲染函数 | Function |
| elRadio | ElRadioDispatcher 自定义渲染函数 | Function |
| elRadioButton | ElRadioButtonDispatcher 自定义渲染函数 | Function |
| elRadioGroup | ElRadioGroupDispatcher 自定义渲染函数 | Function |
| elSwitch | ElSwitchDispatcher 自定义渲染函数 | Function |
| elDatePicker | ElDatePickerDispatcher 自定义渲染函数 | Function |
| elTimePicker | ElTimePickerDispatcher 自定义渲染函数 | Function |
| elTimeSelect | ElTimeSelectDispatcher 自定义渲染函数 | Function |
| elRate | ElRateDispatcher 自定义渲染函数 | Function |
| elSlider | ElSliderDispatcher 自定义渲染函数 | Function |

## 局部配置
如果组件的实际配置与全局配置不同，需要用局部配置覆盖全局配置，配置名默认`rwDispatcherConfig`。局部配置与全局配置的唯一区别，是局部配置**没有**命名空间(namespace)选项，而全局配置有。

### 使用
```html
<template>
  <el-form ref="form" :model="form" label-width="80px" size="small">
    <el-form-item label="活动名称">
      <el-input-dispatcher v-model="form.name" />
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select-dispatcher v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select-dispatcher>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  provide () {
    return {
      rwDispatcherProvider: this
    }
  },
  data () {
    return {
      rwDispatcherState: 'write',
      rwDispatcherConfig: {
        readStateRender: {
          elInput (h, context) {
            return h('span', {
              style: { color: 'red' }
            }, context.data.attrs.value)
          },
          elSelect (h, context) {
            const { data, children } = context
            const vnode = children.find(item => {
              return item.componentOptions.propsData.value === data.attrs.value
            })
            if (!vnode) {
              return null
            }
            return h('span', {
              style: { color: 'green' }
            }, vnode.componentOptions.propsData.label)
          }
        }
      },
      form: {
        name: '618电器折扣日',
        region: 'shanghai'
      }
    }
  }
}
</script>
```

## 配置优先级
read 状态的渲染函数有多套配置，分别是：

- **全局配置**

插件初始化时配置。比如命名空间 `namespace`（默认 `rwDispatcher`），用法是：

```js
import Vue from 'vue'
import ElementUiRwDispatcher from 'element-ui-rw-dispatcher'

Vue.use(ElementUiRwDispatcher, {
  // 全局配置
})
```

- **局部配置**

在 provider 组件中的 `${namespace}Config` 参数（默认 `rwDispatcherConfig`），用法是：

```js
export default {
  data () {
    return {
      rwDispatcherConfig: {
        // 局部配置
      }
    }
  }
}
```

- **组件配置**

单个组件的 props 和 slot。比如：

```html
<el-date-picker-dispatcher type="daterange" rw-dispatcher-range-separator="-">
  <template #rwDispatcherRender="{ data, children }">
    <!-- slot -->
  </template>
</el-date-picker-dispatcher>
```

优先级顺序是：

`组件配置` > `局部配置` > `全局配置`，优先级高的配置会覆盖优先级低的配置。

组件配置中 `slot` > `props`。如下：
```html
<template>
  <el-input-dispatcher :rw-dispatcher-render="inputRender">
    <template #rwDispatcherRender="{ data, children }">
      <!-- slot -->
    </template>
  </el-date-picker-dispatcher>
</template>

<script>
export default {
  methods: {
    inputRender (h, context) {
      // render
    }
  }
}
</script>
```
read 状态会应用 slot 的渲染函数。

## 组件配置

### ElInputDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElInputNumberDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElSelectDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-separator<br />（默认 rw-dispatcher-separator）</td>
      <td>自定义分隔符</td>
      <td>String</td>
      <td>|</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElCheckboxDispatcher

#### Checkbox Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### Checkbox Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

#### CheckboxButton Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### CheckboxButton Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

#### CheckboxGroup Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-separator<br />（默认 rw-dispatcher-separator）</td>
      <td>自定义分隔符</td>
      <td>String</td>
      <td>|</td>
    </tr>
  </tbody>
</table>

#### CheckboxGroup Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElRadioDispatcher

#### Radio Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### Radio Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

#### RadioButton Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### RadioButton Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

#### RadioGroup Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### RadioGroup Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElDatePickerDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-separator<br />（默认 rw-dispatcher-separator）</td>
      <td>
        自定义连接符。与 type="datetimerange|daterange|monthrange" 配合使用。
        连接符共四个地方配置，分别是组件配置 separator|${namespace}-separator、局部配置、全局配置。
        优先级是组件配置 separator > 组件配置 ${namespace}-separator > 局部配置 > 全局配置
      </td>
      <td>String</td>
      <td>|</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElTimePickerDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-separator<br />（默认 rw-dispatcher-separator）</td>
      <td>
        自定义连接符。与 is-range 配合使用。
        连接符共四个地方配置，分别是组件配置 separator|${namespace}-separator、局部配置、全局配置。
        优先级是组件配置 separator > 组件配置 ${namespace}-separator > 局部配置 > 全局配置
      </td>
      <td>String</td>
      <td>|</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElTimeSelectDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElSwitchDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElRateDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>

### ElSliderDispatcher

#### Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}-state<br />（默认 rw-dispatcher-state，kebeb-case）</td>
      <td>组件状态，可选值为 "read"|"write"，优先级高于局部状态</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-render<br />（默认 rw-dispatcher-render，kebeb-case）</td>
      <td>自定义渲染函数（props 形式）</td>
      <td>Function(h, context)</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>${namespace}-range-separator<br />（默认 rw-dispatcher-range-separator</td>
      <td>自定义连接符</td>
      <td>String</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### Scoped Slots

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${namespace}Render<br />（默认 rwDispatcherRender，camelCase）</td>
      <td>
        read 状态自定义渲染函数。参数是<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank">Vue 函数式组件]</a>中的 context.data 和 context.children
      </td>
    </tr>
  </tbody>
</table>
