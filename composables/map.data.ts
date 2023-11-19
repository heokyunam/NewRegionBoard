import { TileType } from "@/composables/map.type";
import tileImageDirt from "@/assets/images/dirt.png";
import tileImageField from "@/assets/images/field.png";
import tileImageForest from "@/assets/images/forest.png";
import tileImageMountain from "@/assets/images/mountain.png";

const tileGrid = [
    4, 5,    6,    7,    8,
    3, null, null, null, 9,
    2, null, null, null, 10,
    1, null, null, null, 11,
    0, 15,   14,   13,   12
];

const tileTypes: TileType[] = [
    'Dirt', 'Dirt', 'Field', 'Field', 'Field',
    'Forest', 'Forest', 'Forest', 'Field',
    'Field', 'Field', 'Mountain', 'Mountain',
    'Mountain', 'Field', 'Dirt', 
];

const imageUrls = new Map<TileType, string | null>();

imageUrls.set('Dirt', tileImageDirt);
imageUrls.set('Field', tileImageField);
imageUrls.set('Forest', tileImageForest);
imageUrls.set('Mountain', tileImageMountain);
imageUrls.set('Empty', null);

export const tiles = tileTypes.map((tileType, idx) => {
    const tileImageUrl = imageUrls.get(tileType);
    return {
        tileType,
        tileUnit: 'Empty',
        id: `${tileType}-${idx}`,
        idx: idx,
        tileImageUrl
    }
});

export const grids = tileGrid.map((tile, idx): Tile => {
    if(tile !== null) {
        return tiles[tile];
    } else {
        return {
            tileType: 'Empty',
            tileUnit: 'Empty',
            id: `Empty-${idx}`,
            tileImageUrl: null
        }
    }
})