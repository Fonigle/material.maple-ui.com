<template>
    <div class="guide">
        <div class="sidebar-wrapper">
            <sidebar-nav :list="navList"></sidebar-nav>
        </div>
        <div class="content-wrapper"
             v-theme:background
             v-theme:shadow>
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import SidebarNav from '@/components/sidebar-nav/sidebar-nav.vue';

    import articles from '@/_config/articles';

    @Component({
        components: {
            SidebarNav
        }
    })
    export default class Guide extends Vue {
        navList = articles;
    }
</script>
<style lang="scss" scoped>
    .guide {
        margin-top: 72px;
        padding-top: 64px;

        .sidebar-wrapper {
            position: fixed;
            top: 64px;
            left: 0;
            width: 240px;
            height: calc(100vh - 64px);
        }

        .content-wrapper {
            width: 768px;
            margin: 0 auto;
            min-height: 100vh;
        }
    }
</style>
