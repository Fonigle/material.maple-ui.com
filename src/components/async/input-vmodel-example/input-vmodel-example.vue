<template>
    <div class="input-vmodel-example">
        <mdc-input v-model="test"
                   placeholder="测试双向绑定"></mdc-input>
        <div class="tips">绑定值：<span v-html="test"></span></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                test: '123'
            }
        }
    }
</script>
