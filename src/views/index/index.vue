<template>
    <div class="app-index">
        <div class="banner"
             v-theme:background="15"
             v-theme:color="0">
            <h1 class="title">MAPLE-MATERIAL-VUE</h1>
            <div class="slogon">Build your Material Design Web App, faster.</div>
        </div>
        <div class="content">
            <p><strong>maple-material-vue</strong> 是一个Vue组件库</p>
            <p>它基于
                <a rel="nofollow"
                   href="https://www.material.io/develop/web/"
                   target="_blank"
                   v-theme:color="15">
                    官方组件库
                    <i class="icon-open-in-new"></i>
                </a> 封装
            </p>
            <p>现在你可以无需记住繁琐的Html，直接以Vue组件的形式来调用它们</p>
            <mdc-button type="unelevated"
                        @click="$router.push({ name: 'guide' })">详情</mdc-button>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class AppIndex extends Vue {

    }
</script>
<style lang="scss" scoped>
    .banner {
        height: 460px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title {
            font-size: 88px;
            line-height: 128px;
            font-family: "infinity";
            font-weight: 600;
            margin: 0;
        }

        .slogon {
            font-size: 32px;
            line-height: 48px;
            font-family: "infinity";
        }
    }

    .content {
        padding-top: 64px;
        font-size: 16px;
        text-align: center;

        i {
            font-size: 16px;
        }

        button {
            margin-top: 24px;
        }
    }
</style>
