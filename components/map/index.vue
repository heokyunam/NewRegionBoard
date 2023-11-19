
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
    import { UserOrder, RollTheDice, UserOrderFunction } from "~/composables/ui/index.type";

    const { maps, drawings } = getMap();

    const { position, moveFront } = getPosition(maps.value.length);

    const onUserOrder: UserOrderFunction = (order: UserOrder) => {
        
        if(order instanceof RollTheDice) {
            moveFront(order.value);
        }
    }
</script>
<style>
</style>