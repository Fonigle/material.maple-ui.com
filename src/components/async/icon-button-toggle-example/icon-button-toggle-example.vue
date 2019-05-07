<template>
    <div class="expmple">
        <mdc-icon-button-toggle icon-on="icon-heart"
                                icon-off="icon-heart-outline"
                                v-model="status"></mdc-icon-button-toggle>
        <mdc-button @click="status=!status">外部切换</mdc-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                status: true
            }
        }
    }
</script>