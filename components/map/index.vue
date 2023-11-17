
<template>
    <div class="container grid grid-cols-5-100px">
        <div class="relative item w-[100px] h-[100px]" :class="tile.className" v-for="tile, d_index in drawings" :key="tile.id">
            <img class="w-[100%] h-[100%]"
            v-if="tile.tileType !== 'Empty'" 
            :src="tile.tileImageUrl" />
            <img 
            v-if="tile.idx === position" 
                :src="basic_unit"
                class="absolute top-0"
             />
             <map-dice 
             v-if="d_index === 12" 
             :number="6"
             class="absolute top-0"
             :onRoll="onRoll"
             />
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { getMap } from "~/composables/map";
    import basic_unit from "@/assets/images/basic_unit.png";

    const map = getMap();
    const maps: globalThis.Ref<Tile[]> = map.maps;
    const drawings: globalThis.Ref<Tile[]> = map.drawings;

    const position = ref(0);

    const onRoll = (number: number) => {
        position.value = (position.value + number + 1) % map.maps.value.length;
    }
</script>
<style>
</style>