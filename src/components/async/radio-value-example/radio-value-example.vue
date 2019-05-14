<template>
    <div class="radio-value-example">
        <mdc-radio group="fruit"
                   value="apple"
                   v-model="eat">apple</mdc-radio>
        <mdc-radio group="fruit"
                   value="banana"
                   v-model="eat">banana</mdc-radio>
        <mdc-radio group="fruit"
                   value="cherry"
                   v-model="eat">cherry</mdc-radio>
        <div class="bind-value">
            绑定值：<span v-html="eat"></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                eat: 'banana'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .radio-value-example {
        display: flex;
        align-items: center;
        .bind-value {
            margin-left: 32px;
        }
    }
</style>