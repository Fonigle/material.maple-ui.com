<template>
    <div class="list-checkbox-example">
        <mdc-list type="checkbox"
                  v-model="bindValue">
            <mdc-list-item text="foo"
                           value="foo"></mdc-list-item>
            <mdc-list-item text="bar"
                           value="bar"></mdc-list-item>
            <mdc-list-item text="baz"
                           value="baz"></mdc-list-item>
        </mdc-list>
        <span class="indicator">Now Select Value: <var v-html="bindValue"></var></span>
        <mdc-button type="outlined"
                    @click="bindValue = ['bar','baz']">select 'bar'&'baz'</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bindValue: []
            }
        }
    }
</script>
<style lang="scss" scoped>
    .list-checkbox-example {
        .indicator {
            padding-left: 16px;
            margin-right: 16px;

            var {
                font-style: normal;
            }
        }
    }
</style>