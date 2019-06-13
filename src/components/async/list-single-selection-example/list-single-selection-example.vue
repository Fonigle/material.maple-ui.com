<template>
    <div class="list-single-selection-example">
        <mdc-list type="single-selection"
                  v-model="index">
            <mdc-list-item text="foo"></mdc-list-item>
            <mdc-list-item text="bar"></mdc-list-item>
            <mdc-list-item text="baz"></mdc-list-item>
        </mdc-list>
        <span class="indicator">Now Select: <var v-html="index"></var></span>
        <mdc-button type="outlined"
                    @click="index = 1">select secondary</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                index: 0
            }
        }
    }
</script>
<style lang="scss" scoped>
    .list-single-selection-example {
        .indicator {
            padding-left: 16px;
            margin-right: 16px;

            var {
                font-style: normal;
            }
        }
    }
</style>