<template>
    <div class="fab-exited-example">
        <mdc-fab icon="icon-heart"
                 :exited="exited"></mdc-fab>
        <mdc-button @click="exited=!exited" >切换</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                exited: false
            }
        }
    }
</script>