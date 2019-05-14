# <i class="icon-switch"></i> <br/> Swicth / 开关

## 基础用法

### label / 标签

可以通过两种方式设置`checkbox`的 label。

```HTML
<mdc-switch label="prop"></mdc-switch>
<mdc-switch>slot</mdc-switch>
```

<mdc-switch label="prop"></mdc-switch>
<mdc-switch>slot</mdc-switch>

### 双向绑定

可以通过`v-model`双向绑定`switch`的值。  
只能绑定`boolean`类型的值。

```HTML
<template>
    <div class="switch-value-exmaple">
        <mdc-switch v-model="switchVal"></mdc-switch>
        <div class="bind-value">
            绑定值：<span v-html="switchVal"></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                switchVal: true
            }
        }
    }
</script>
```

<switch-value-exmaple></switch-value-exmaple>

## id

如果需要对<strong>组件中原生`input`元素</strong>指定 id。可以在`&lt;mdc-switch&gt;`上绑定 id 属性。  
此属性会自动传递到内部`input`元素上（`&lt;mdc-switch&gt;`最外层元素上不会保留此`id`），同时同步设置`label`的`for`属性。

```HTML
<mdc-switch id="custom-id">Test Id</mdc-switch>
```

<mdc-switch id="custom-id">Test Id</mdc-switch>

你可以通过右键审查此元素查看`id`的设置效果。

## 禁用

通过设置`disabled`属性来禁用`&lt;mdc-switch&gt;`。

```HTML
<mdc-switch disabled>disabled</mdc-switch>
```

<mdc-switch disabled>disabled</mdc-switch>
