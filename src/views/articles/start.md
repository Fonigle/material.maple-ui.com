# 起步

`maple-material-vue` 是一个基于 Material Design [官方组件库](https://www.material.io/develop/web/)封装的 `Vue` 组件库。

## 安装

### npm 安装

`maple-material-vue`已经发布到 npm，我们可以使用 npm 来安装它。  
这也是我们推荐的使用方式。

```bash
npm i --save maple-material-vue
```

### 使用`&lt;script&gt;`引入

直接下载并使用`&lt;script&gt;`标签引入位于项目 dist 文件夹下的`maple-material-vue.js`，`MapleMaterilVue` 会被注册为一个全局变量。

不要忘记你也需要引入同一文件夹下的样式表文件 `maple-material-vue.css`。

## Typescript 支持

我们已经添加了 typescript 类型声明文件，因此无需编写任何的声明语句或添加额外依赖即可在基于 typescript 的项目中使用它。

## 起步

`maple-material-vue`是一个 Vue 插件，我们只需要在引入 Vue 后安装它：

```javascript
import Vue from 'vue';
import MapleMaterialVue from 'maple-material-vue';
import 'maple-material-vue/dist/maple-material-vue.css';  // 别忘了样式表

Vue.use(MapleMaterialVue);
```

而后，就可以使用这些组件了。
以使用`&lt;mdc-button&gt;`为例

```HTML
<template>
    <div class="example">
        <mdc-button type="raised" @click="handleBtnClick">CLICK!</mdc-button>
    </div>
</template>
<script>
    export default {
        methods:{
            handleBtnClick(){
                alert(1);
            }
        }
    }
</script>
```

效果如下：
<start-example></start-example>
