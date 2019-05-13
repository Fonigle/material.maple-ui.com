# <i class="icon-checkbox"></i> <br/> Checkbox / 复选框

## 基础用法

### label / 标签

可以通过两种方式设置`checkbox`的 label

```HTML
<mdc-checkbox label="prop"></mdc-checkbox>
<mdc-checkbox>slot</mdc-checkbox>
```

<mdc-checkbox label="prop"></mdc-checkbox>
<mdc-checkbox>slot</mdc-checkbox>

### 数据和双向绑定

可以通过`value`指定`checkbox`对应的值，通过`v-model`进行数据双向绑定，通过`name`来为`checkbox`进行分组。  
这与使用原生的`&lt;checkbox&gt;`元素时完全相同。

```HTML
<template>
    <div class="checkbox-value-example">
        <div class="group">
            <mdc-checkbox name="group1"
                          v-model="test1">boolean</mdc-checkbox>
            <div class="bind-value">
                绑定值：<span v-html="test1"></span>
            </div>

        </div>
        <div class="group">
            <mdc-checkbox name="group2"
                          value="apple"
                          v-model="test2">apple</mdc-checkbox>
            <mdc-checkbox name="group2"
                          value="banana"
                          v-model="test2">banana</mdc-checkbox>
            <mdc-checkbox name="group2"
                          value="cherry"
                          v-model="test2">cherry</mdc-checkbox>
            <div class="bind-value">
                绑定值：<span v-html="test2"></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                test1: true,
                test2: []
            }
        }
    }
</script>
```

<checkbox-value-example></checkbox-value-example>

## id

如果需要对<strong>组件中原生`input`元素</strong>指定 id。可以在`&lt;mdc-checkbox&gt;`上绑定 id 属性。  
此属性会自动传递到内部`input`元素上（`&lt;mdc-checkbox&gt;`最外层元素上不会保留此`id`），同时同步设置`label`的`for`属性。

```HTML
<mdc-checkbox id="custom-id">Test Id</mdc-checkbox>
```

<mdc-checkbox id="custom-id">Test Id</mdc-checkbox>

你可以通过右键审查此元素查看`id`的设置效果。

## 禁用

通过设置`disabled`属性来禁用`&lt;mdc-checkbox&gt;`。

```HTML
<mdc-checkbox disabled>disabled</mdc-checkbox>
```

<mdc-checkbox disabled>disabled</mdc-checkbox>
