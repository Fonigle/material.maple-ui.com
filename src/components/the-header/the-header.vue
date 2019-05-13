<template>
    <header class="app-header"
            v-theme:background="18">
        <div class="logo"
             v-if="$route.name!='index'">
            MAPLE-MATERIAL-VUE
        </div>

        <nav>
            <router-link v-for="item of navList"
                         :key="item.name"
                         :class="{active:item.routeName===activePrimaryRouter}"
                         :to="{name:item.routeName}">
                {{item.name}}
            </router-link>
            <a target="_blank"
               rel="noflow"
               href="https://github.com/Fonigle/maple-material-vue">
                github <i class="icon-open-in-new"></i>
            </a>
        </nav>
    </header>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class MyComponent extends Vue {
        // navList = [{
        //     name: '首页',
        //     routeName: 'index'
        // }, {
        //     name: '教程',
        //     routeName: 'guide'
        // }, {
        //     name: 'Github',
        //     href: 'https://github.com/Fonigle/maple-material-vue'
        // }]

        navList = [{
            name: '首页',
            routeName: 'index',
        }, {
            name: '教程',
            routeName: 'guide',
        }]

        get activePrimaryRouter() {
            let result = '';
            result = this.$route.matched[0] && this.$route.matched[0].name || '';
            return result;
        }
    }
</script>
<style lang="scss" scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 72px;

        .logo {
            float: left;
            font-family: "infinity";
            font-weight: 900;
            font-size: 32px;
            line-height: 72px;
            color: #fff;
            padding-left: 24px;
        }

        nav {
            float: right;
            height: 100%;
            a {
                font-size: 16px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 0 24px;
                height: 100%;
                vertical-align: middle;
                cursor: pointer;
                color: #fff;

                i {
                    font-size: 16px;
                }

                &:not(:hover):not(.active) {
                    opacity: 0.8;
                }

                &.active {
                    background: rgba(#000, 0.12);
                }
            }
        }
    }
</style>
