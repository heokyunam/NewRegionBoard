
<template>
    <div class="container grid grid-cols-5-100px">
        <div class="item w-[100px] h-[100px]" :class="tile.className" v-for="tile in drawings" :key="tile.id">
            <img class="w-[100%] h-[100%]"
            v-if="tile.tileType !== 'Empty'" 
            :src="tile.tileImageUrl" />
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { getMap } from "~/composables/map";

    const { maps, drawings } = getMap();
</script>
<style>
</style>