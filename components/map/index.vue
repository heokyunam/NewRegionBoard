
<template>
    <div class="container grid grid-cols-5-100px">
        <div class="relative item w-[100px] h-[100px]" 
                :class="tile.className" 
                v-for="tile, drawing_index in drawings" :key="tile.id">
             <map-area 
                v-if="tile.tileType !== 'Empty'" 
                :tile="tile" 
                :position="position" />
            <map-ui
                v-else
                :drawing_index="drawing_index"
                :user_order_function="onUserOrder"
                />
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { getMap } from "~/composables/map";
    import { UserOrder, RollTheDice, UserOrderFunction } from "~/composables/ui";

    const { maps, drawings } = getMap();
    // const maps: globalThis.Ref<Tile[]> = map.maps;
    // const drawings: globalThis.Ref<Tile[]> = map.drawings;

    const { position, moveFront } = getPosition(maps.value.length);

    const onUserOrder: UserOrderFunction = (order: UserOrder) => {
        console.log(order);
        
        if(order instanceof RollTheDice) {
            moveFront(order.value);
            console.log("move!");
        }
    }

    // const position = ref(0);

    // const onRoll = (number: number) => {
    //     console.log(map.maps.value.length);
    //     position.value = (position.value + number + 1) % map.maps.value.length;
    // }
</script>
<style>
</style>