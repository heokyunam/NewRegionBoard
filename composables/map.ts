import { TileType } from "./map.type";
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
    'Mountain', 'Field', 'Dirt', 'Dirt', 
];

const imageUrls = new Map<TileType, string | null>();

imageUrls.set('Dirt', tileImageDirt);
imageUrls.set('Field', tileImageField);
imageUrls.set('Forest', tileImageForest);
imageUrls.set('Mountain', tileImageMountain);
imageUrls.set('Empty', null);

export const getMap = () => {
    const maps = ref<Tile[]>([]);
    const drawings = ref<Tile[]>([]);

    maps.value = tileTypes.map((tileType, idx) => {
        const tileImageUrl = imageUrls.get(tileType);
        return {
            tileType,
            tileUnit: 'Empty',
            id: `${tileType}-${idx}`,
            tileImageUrl
        }
    });

    drawings.value = tileGrid.map((tile, idx) => {
        if(tile !== null) {
            return maps.value[tile];
        } else {
            return {
                tileType: 'Empty',
                tileUnit: 'Empty',
                id: `Empty-${idx}`,
                tileImageUrl: null
            }
        }
    })

    return { maps, drawings };
}