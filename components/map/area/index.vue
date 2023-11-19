<template>
    <img class="w-[100%] h-[100%]"
        :src="tile.tileImageUrl" />
    <img class="absolute top-0"
        v-if="tile.idx === position" 
        :src="basic_unit" />
</template>
<script lang='ts' setup>
    import basic_unit from "@/assets/images/basic_unit.png";
    const {tile} = defineProps<{
        tile: Tile,
        position: number,
    }>();
</script>
<style lang='scss'>
    
</style>