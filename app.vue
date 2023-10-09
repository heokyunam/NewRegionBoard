<template>
    <Map :maps="maps"/>
</template>
<script lang='ts' setup>
    import getMap from '@/composables/map';
    const { maps } = getMap();

    onMounted(() => {

    })
</script>
<style lang='scss'>
    
</style>