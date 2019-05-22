# <i class="icon-input"></i> <br/> Input / 输入框

## 基础用法

```HTML
<mdc-input placeholder="姓名"></mdc-input>
```

<mdc-input placeholder="姓名"></mdc-input>

## 更多样式

### fullwidth / 整行宽度

```HTML
<mdc-input type="fullwidth" placeholder="地址"></mdc-input>
```

<mdc-input type="fullwidth" placeholder="地址"></mdc-input>

### Outlined / 边框

```HTML
<mdc-input type="outlined" placeholder="邮编"></mdc-input>
```

<mdc-input type="outlined" placeholder="邮编"></mdc-input>

### NoLabel / 无标签

添加`no-label`属性即可将其设置为无标签输入框。  
此时即使设置了 placeholder 属性，也不会显示标签或占位符，例如：

```HTML
<mdc-input no-label placeholder="姓名"></mdc-input>
<mdc-input type="outlined" no-label placeholder="姓名"></mdc-input>
<mdc-input type="fullwidth" no-label placeholder="姓名"></mdc-input>
```

<mdc-input no-label placeholder="姓名"></mdc-input>
<mdc-input type="outlined" no-label placeholder="姓名"></mdc-input>
<mdc-input type="fullwidth" no-label placeholder="姓名"></mdc-input>

## 数据绑定

通过`v-model`可进行数据双向绑定。

```HTML
<template>
    <div class="input-vmodel-example">
        <mdc-input v-model="test"
                   placeholder="测试双向绑定"></mdc-input>
        <div class="tips">绑定值：<span v-html="test"></span></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                test: '123'
            }
        }
    }
</script>

```

<input-vmodel-example></input-vmodel-example>

## 图标

设置`leading-icon`或`trailing-icon`属性可以在输入框前方或后方添加一个图标。属性的值将被作为图标的类名。

```HTML
<mdc-input placeholder="姓名" leading-icon="icon-account"></mdc-input>
<mdc-input type="outlined" placeholder="姓名" trailing-icon="icon-account"></mdc-input>
```

<mdc-input placeholder="姓名" leading-icon="icon-account"></mdc-input>
<mdc-input type="outlined" placeholder="姓名" trailing-icon="icon-account"></mdc-input>

注意：`type="fullwidth"`的输入框无法添加图标。
注意：同时指定`leading-icon`或`trailing-icon`虽然不会直接引发错误，但这不符合 Material Design 的设计原则，应尽量避免这样使用。

## 禁用状态

添加`disabled`属性以禁用输入框。

```HTML
<mdc-input disabled placeholder="姓名"></mdc-input>
<mdc-input type="outlined" disabled placeholder="姓名"></mdc-input>
```

<mdc-input disabled placeholder="姓名"></mdc-input>
<mdc-input type="outlined" disabled placeholder="姓名"></mdc-input>

## 提示

### 帮助文字

设置`helper`属性可以在输入框聚焦时在其下方展示提示文字。

```HTML
<mdc-input placeholder="账号" helper="账号为邮箱或手机号"></mdc-input>
```

<mdc-input placeholder="账号" helper="账号为邮箱或手机号"></mdc-input>

### 字数统计

添加`counter`属性可以在输入框下方右侧展示字数统计。

```HTML
<mdc-input placeholder="手机号" :maxlength="13" counter></mdc-input>
<mdc-input placeholder="手机号" :maxlength="13" counter helper="手机号为13位数字"></mdc-input>
```

<mdc-input placeholder="手机号" :maxlength="13" counter></mdc-input>
<mdc-input placeholder="手机号" :maxlength="13" counter helper="手机号为13位数字"></mdc-input>

注意：`counter`属性需要配合指定了可用数值的`maxlength`属性使用。当`maxlength`未设置或数据不正确时，`counter`属性无效。

注意：`counter`属性可以与`helper`属性共同使用，但需要注意文字的长度，避免发生样式错误。

## 其他属性

### maxlength

作用与原生`maxlength`属性一致。  
实际上，数值会被直接传递到组件内部的原生`input`元素上。

```HTML
<mdc-input placeholder="邮编" :maxlength="6"></mdc-input>
```

<mdc-input placeholder="邮编" :maxlength="6"></mdc-input>

注意：`maxlength`仅接受`number`类型的值。
