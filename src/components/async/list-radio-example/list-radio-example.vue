<template>
    <div class="list-radio-example">
        <mdc-list type="radio"
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
                    @click="bindValue = 'baz'">select 'baz'</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bindValue: 'foo'
            }
        }
    }
</script>
<style lang="scss" scoped>
    .list-radio-example {
        .indicator {
            padding-left: 16px;
            margin-right: 16px;

            var {
                font-style: normal;
            }
        }
    }
</style>