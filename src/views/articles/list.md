# <i class="icon-list"></i> <br/> List / 列表

## 基础用法

```HTML
<mdc-list>
    <mdc-list-item text="foo"></mdc-list-item>
    <mdc-list-item text="bar"></mdc-list-item>
    <mdc-list-item text="baz"></mdc-list-item>
</mdc-list>
```

<mdc-list>
    <mdc-list-item text="foo"></mdc-list-item>
    <mdc-list-item text="bar"></mdc-list-item>
    <mdc-list-item text="baz"></mdc-list-item>
</mdc-list>

## 双行文字

在`&lt;mdc-list&gt;`上添加`two-line`属性，并在`&lt;mdc-list-item&gt;`上使用`primary`和`secondary`代替`text`属性，即可在列表中显示双行文字。

超出宽度的文字将被**截断**。

```HTML
<mdc-list two-line>
    <mdc-list-item primary="foo" secondary="this is secondary text"></mdc-list-item>
    <mdc-list-item primary="bar" secondary="this is another secondary text"></mdc-list-item>
    <mdc-list-item primary="baz" secondary="this is a long long long long long long long long long long long long long long long long long long long long text"></mdc-list-item>
</mdc-list>
```

<mdc-list two-line>
    <mdc-list-item primary="foo" secondary="this is secondary text"></mdc-list-item>
    <mdc-list-item primary="bar" secondary="this is also secondary text"></mdc-list-item>
    <mdc-list-item primary="baz" secondary="this is a long long long long long long long long long long long long long long long long long long long long text"></mdc-list-item>
</mdc-list>

## 分割线（`&lt;mdc-list-divider&gt;`）

使用`&lt;mdc-list-divider&gt;`来对列表项或两个列表进行分隔。

`&lt;mdc-list-divider&gt;`生成的元素会根据其所在环境自动变更：

-   若其处于列表中时，则生成`&lt;li role="separator"&gt;`
-   若其处于列表外，则生成`&lt;hr&gt;`

### 列表内

```HTML
<mdc-list>
    <mdc-list-item text="foo"></mdc-list-item>
    <mdc-list-item text="bar"></mdc-list-item>
    <mdc-list-divider></mdc-list-divider>
    <mdc-list-item text="baz"></mdc-list-item>
</mdc-list>
```

<mdc-list>
    <mdc-list-item text="foo"></mdc-list-item>
    <mdc-list-item text="bar"></mdc-list-item>
    <mdc-list-divider></mdc-list-divider>
    <mdc-list-item text="baz"></mdc-list-item>
</mdc-list>

### 两个列表之间

```HTML
<mdc-list>
    <mdc-list-item text="foo"></mdc-list-item>
    <mdc-list-item text="bar"></mdc-list-item>
</mdc-list>
<mdc-list-divider></mdc-list-divider>
<mdc-list>
    <mdc-list-item text="baz"></mdc-list-item>
</mdc-list>
```

<mdc-list>
    <mdc-list-item text="foo"></mdc-list-item>
    <mdc-list-item text="bar"></mdc-list-item>
</mdc-list>
<mdc-list-divider></mdc-list-divider>
<mdc-list>
    <mdc-list-item text="baz"></mdc-list-item>
</mdc-list>

## 分组（`&lt;mdc-list-group&gt;`）

使用`&lt;mdc-list-group&gt;`对列表进行分组，指定`title`属性设定组标题。

```HTML
<mdc-list-group title="List One">
    <mdc-list>
        <mdc-list-item text="foo"></mdc-list-item>
        <mdc-list-item text="bar"></mdc-list-item>
    </mdc-list>
    <mdc-list-divider></mdc-list-divider>
    <mdc-list>
        <mdc-list-item text="baz"></mdc-list-item>
    </mdc-list>
</mdc-list-group>
```

<mdc-list-group title="List One">
    <mdc-list>
        <mdc-list-item text="foo"></mdc-list-item>
        <mdc-list-item text="bar"></mdc-list-item>
    </mdc-list>
    <mdc-list-divider></mdc-list-divider>
    <mdc-list>
        <mdc-list-item text="baz"></mdc-list-item>
    </mdc-list>
</mdc-list-group>

## 可选择列表

共有三种可选择列表`single-selection`、`radio`、`checkbox`。  
通过对`&lt;mdc-list&gt;`指定`type`属性激活它。

**所有类型的可选择列表均支持双向绑定。**

### single-selection

`single-selection`模式双向绑定值为选项的**序号**（`index`），不支持自定义。

```HTML
<template>
    <div class="list-single-selection-example">
        <mdc-list type="single-selection"
                  v-model="index">
            <mdc-list-item text="foo"></mdc-list-item>
            <mdc-list-item text="bar"></mdc-list-item>
            <mdc-list-item text="baz"></mdc-list-item>
        </mdc-list>
        <span class="indicator">Now Select: <var v-html="index"></var></span>
        <mdc-button type="outlined"
                    @click="index = 1">select secondary</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                index: 0
            }
        }
    }
</script>
```

<list-single-selection-example></list-single-selection-example>

### radio

`radio`模式双向绑定值为`&lt;mdc-list-item&gt;`的`value`值。

```HTML
<template>
    <div class="list-radio-example">
        <mdc-list type="radio"
                  v-model="bindValue">
            <mdc-list-item text="foo"
                           value="foo"></mdc-list-item>
            <mdc-list-item text="bar"
                           value="bar"></mdc-list-item>
            <mdc-list-item text="baz"
                           value="baz"></mdc-list-item>
        </mdc-list>
        <span class="indicator">Now Select Value: <var v-html="bindValue"></var></span>
        <mdc-button type="outlined"
                    @click="bindValue = 'baz'">select 'baz'</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bindValue: 'foo'
            }
        }
    }
</script>
```

<list-radio-example></list-radio-example>

### checkbox

`checkbox`模式双向绑定值为`&lt;mdc-list-item&gt;`的`value`值。一般情况下，双向绑定值应为数组。

```HTML
<template>
    <div class="list-checkbox-example">
        <mdc-list type="checkbox"
                  v-model="bindValue">
            <mdc-list-item text="foo"
                           value="foo"></mdc-list-item>
            <mdc-list-item text="bar"
                           value="bar"></mdc-list-item>
            <mdc-list-item text="baz"
                           value="baz"></mdc-list-item>
        </mdc-list>
        <span class="indicator">Now Select Value: <var v-html="bindValue"></var></span>
        <mdc-button type="outlined"
                    @click="bindValue = ['bar','baz']">select 'bar'&'baz'</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bindValue: []
            }
        }
    }
</script>
```

<list-checkbox-example></list-checkbox-example>
