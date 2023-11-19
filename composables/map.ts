import { grids, tiles } from "@/composables/map.data";

export const getMap = (): {
    maps: globalThis.Ref<Tile[]>;
    drawings: globalThis.Ref<Tile[]>;
} => {
    const maps = ref<Tile[]>([]);
    const drawings = ref<Tile[]>([]);

    maps.value = tiles;
    drawings.value = grids;

    return { maps, drawings };
}