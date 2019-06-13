# <i class="icon-button"></i> <br/> Icon Button / 图标按钮

## 基础用法

```HTML
<mdc-icon-button icon="icon-heart"></mdc-icon-button>
```

<mdc-icon-button icon="icon-heart"></mdc-icon-button>

## 切换（`&lt;mdc-icon-button-toggle&gt;`）

对于可切换状态的图标按钮，已经实现双向绑定。  
点击按钮本身或在外部改变绑定值均可实现按钮状态切换。

```HTML
<template>
    <div class="expmple">
        <mdc-icon-button-toggle icon-on="icon-heart"
                                icon-off="icon-heart-outline"
                                v-model="status"></mdc-icon-button-toggle>
        <mdc-button @click="status=!status">外部切换</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                status: true
            }
        }
    }
</script>
```

<icon-button-toggle-example></icon-button-toggle-example>
