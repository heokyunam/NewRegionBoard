<template>
    <div class="bg-primary rounded-[20px] px-3 py-3 flex items-center mr-3">
        <div class="text-dark font-medium text-xs pr-2">
            {{ name }}
        </div>
        <div>
            <img src="@/assets/images/close.png" alt="">
        </div>
    </div>
</template>
<script lang='ts' setup>
    const { name } = defineProps({
        name: String
    })
</script>
<style lang='scss'>
    
</style>