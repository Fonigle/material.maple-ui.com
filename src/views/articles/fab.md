# <i class="icon-button"></i> <br/> Floating Action Button / 浮动按钮

## 基础用法

```HTML
<mdc-fab icon="icon-heart"></mdc-fab>
```

<mdc-fab icon="icon-heart"></mdc-fab>

## 尺寸

通过添加`mini`属性，来构建一个更小的浮动按钮。

```HTML
<mdc-fab icon="icon-heart" mini></mdc-fab>
```

<mdc-fab icon="icon-heart" mini></mdc-fab>

NOTE: `mini`属性无法与`extended`共同生效。在同时设置了`extended`属性时，`mini`属性将被忽略。

## 扩展内容

通过`extended`和`label`属性可以在横向拓展浮动按钮的内容。

```HTML
<mdc-fab icon="icon-heart" extended label="label"></mdc-fab>
```

<mdc-fab icon="icon-heart" extended label="label"></mdc-fab>

### 后置按钮

使用`trailing-icon`属性替换`icon`，可以将图标移至标签右侧显示

```HTML
<mdc-fab trailing-icon="icon-heart" extended label="label"></mdc-fab>
```

<mdc-fab trailing-icon="icon-heart" extended label="label"></mdc-fab>

注意：虽然同时设置`icon`和`trailing-icon`不会引发直接的错误，但是这并不复合 Materail Design 设计原则，因此最好避免如此使用。

## 退出状态

通过将`exited`属性置为`true`，将浮动按钮隐藏，并展示退场动画；反之，将其置为`false`，将重新展示按钮，并展示进场动画

```HTML
<template>
    <div class="fab-exited-example">
        <mdc-fab icon="icon-heart"
                 :exited="exited"></mdc-fab>
        <mdc-button @click="exited=!exited">切换</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                exited: false
            }
        }
    }
</script>
```

<fab-exited-example></fab-exited-example>
