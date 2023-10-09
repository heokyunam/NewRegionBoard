import tileImageDirt from "@/assets/images/dirt.png";
import tileImageField from "@/assets/images/field.png";
import tileImageForest from "@/assets/images/forest.png";
import tileImageMountain from "@/assets/images/mountain.png";

export declare type TileType = 'Field' | 'Dirt' | 'Forest' | 'Mountain' | 'Empty';
export declare type TileUnit = 'Empty' | 'Player' | 'Rabbit' | 'Deer' | 'Wolf' | 'Bear';

export interface Tile {
    tileType: TileType;
    tileUnit: TileUnit;
    x: number;
    y: number;
    id: string;
    tileImageUrl: string;
    className: string;
}

export const tileTypes: TileType[] = [
    'Dirt', 'Dirt', 'Field', 'Field', 'Field',
    'Forest', 'Forest', 'Forest', 'Field',
    'Field', 'Field', 'Mountain', 'Mountain',
    'Mountain', 'Mountain', 'Field', 'Dirt', 
];

export const mapTileFunc = (tileType: TileType, idx: number): Tile => {
    const x = (idx < 5)? 0:
                (idx < 9)? idx - 5:
                (idx < 13)? 4: 
                16 - idx;
    const y = (idx < 5)? idx:
                (idx < 9)? 4:
                (idx < 13)? 12 - idx:
                0;
    const tileImageUrl = (tileType === "Dirt")? tileImageDirt:
                            (tileType === "Field")? tileImageField:
                            (tileType === "Forest")? tileImageForest:
                            (tileType === "Mountain")? tileImageMountain:
                            "";

    const className = `left-${x*24} top-${y*24}`;
    
    return {
        tileType,
        tileUnit: 'Empty',
        x,
        y,
        id: `${x}-${y}`,
        tileImageUrl,
        className
    }
}

export const tiles: Tile[] = tileTypes.map(mapTileFunc);