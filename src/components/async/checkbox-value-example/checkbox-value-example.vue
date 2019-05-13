<template>
    <div class="checkbox-value-example">
        <div class="group">
            <mdc-checkbox name="group1"
                          v-model="test1"></mdc-checkbox>
            <div class="bind-value">
                绑定值：{{test1}}
            </div>

        </div>
        <div class="group">
            <mdc-checkbox name="group2"
                          value="apple"
                          v-model="test2">apple</mdc-checkbox>
            <mdc-checkbox name="group2"
                          value="banana"
                          v-model="test2">banana</mdc-checkbox>
            <mdc-checkbox name="group2"
                          value="cherry"
                          v-model="test2">cherry</mdc-checkbox>
            <div class="bind-value">
                绑定值：{{test2}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                test1: true,
                test2: []
            }
        }
    }
</script>
<style lang="scss" scoped>
    .group {
        display: flex;
        align-items: center;

        .bind-value {
            margin-left: 32px;
        }
    }
</style>