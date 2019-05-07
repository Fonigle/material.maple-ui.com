<template>
    <div class="example">
        <mdc-button type="raised"
                    @click="handleBtnClick">CLICK!</mdc-button>
    </div>
</template>
<script>
    export default {
        methods: {
            handleBtnClick() {
                alert(1);
            }
        }
    }
</script>