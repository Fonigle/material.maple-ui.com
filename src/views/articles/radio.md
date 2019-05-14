# <i class="icon-radio"></i> <br/> Radio / 单选框

## 基础用法

### label

可以通过两种方式设置`checkbox`的 label。

```HTML
<mdc-radio label="prop"></mdc-radio>
<mdc-radio>slot</mdc-radio>
```

<mdc-radio label="prop"></mdc-radio>
<mdc-radio>slot</mdc-radio>

### 数据和双向绑定

可以通过`value`指定`radio`对应的值，通过`v-model`进行数据双向绑定，通过`name`来为`radio`进行分组。  
这与使用原生的`&lt;radio&gt;`元素时完全相同。

```HTML
<template>
    <div class="radio-value-example">
        <mdc-radio group="fruit"
                   value="apple"
                   v-model="eat">apple</mdc-radio>
        <mdc-radio group="fruit"
                   value="banana"
                   v-model="eat">banana</mdc-radio>
        <mdc-radio group="fruit"
                   value="cherry"
                   v-model="eat">cherry</mdc-radio>
        <div class="bind-value">
            绑定值：<span v-html="eat"></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                eat: 'banana'
            }
        }
    }
</script>
```

<radio-value-example></radio-value-example>

## id

如果需要对<strong>组件中原生`input`元素</strong>指定 id。可以在`&lt;mdc-radio&gt;`上绑定 id 属性。  
此属性会自动传递到内部`input`元素上（`&lt;mdc-radio&gt;`最外层元素上不会保留此`id`），同时同步设置`label`的`for`属性。

```HTML
<mdc-radio id="custom-id">Test Id</mdc-radio>
```

<mdc-radio id="custom-id">Test Id</mdc-radio>

你可以通过右键审查此元素查看`id`的设置效果。

## 禁用

通过设置`disabled`属性来禁用`&lt;mdc-checkbox&gt;`。

```HTML
<mdc-radio disabled>disabled</mdc-radio>
```

<mdc-radio disabled>disabled</mdc-radio>
