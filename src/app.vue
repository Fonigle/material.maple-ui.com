<template>
    <div id="app"
         class="app"
         v-bar>
        <div class="app-wrapper">
            <the-header></the-header>
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="tsx">
    import { Vue, Component } from "vue-property-decorator";
    import TheHeader from '@/components/the-header/the-header.vue';

    @Component({
        components: {
            TheHeader
        }
    })
    export default class App extends Vue { }
</script>
<style lang="scss">
    .app {
        height: 100%;
        .app-wrapper {
            margin-top: 72px;
        }
    }

    :root {
        --mdc-theme-primary: #2196f3;
    }
</style>
