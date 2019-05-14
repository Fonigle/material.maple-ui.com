<template>
    <div class="switch-value-exmaple">
        <mdc-switch v-model="switchVal"></mdc-switch>
        <div class="bind-value">
            绑定值：<span v-html="switchVal"></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                switchVal: true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .switch-value-exmaple {
        display: flex;
        align-items: center;

        .bind-value {
            margin-left: 32px;
        }
    }
</style>
