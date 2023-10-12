
export declare type TileType = 'Field' | 'Dirt' | 'Forest' | 'Mountain' | 'Empty';
export declare type TileUnit = 'Empty' | 'Player' | 'Rabbit' | 'Deer' | 'Wolf' | 'Bear';

export interface Tile {
    tileType: TileType;
    tileUnit: TileUnit;
    id: string;
    tileImageUrl: string | null;
}