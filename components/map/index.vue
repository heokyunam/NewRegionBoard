<template>
    <div class="container">
        <div class="item" :class="tile.className" v-for="tile in maps" :key="tile.id">
            <img v-if="tile.tileType !== 'Empty'" :src="tile.tileImageUrl" />
        </div>
    </div>
</template>
<script lang='ts' setup>
    import { Tile } from '@/composables/tile';

    const { tiles } = defineProps({
        tiles: {
            type: Array as PropType<Tile[]>
        },
        maps: {
            type: Array as PropType<(Tile)[]>,
            required: true
        }
    })
</script>
<style lang='scss'>
    .container {
        display: grid;
        grid-template-columns: repeat(5, 100px);
        grid-template-rows: repeat(5, 100px);

        .item {
            width: 100px;
            height: 100px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>