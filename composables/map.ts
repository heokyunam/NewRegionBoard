
/*
4 5  6  7  8
3          9
2          10
1          11
0 15 14 13 12
*/

const getMap = () => {
    const tiles = tileTypes.map(mapTileFunc);
    const tileGrid = [
        4, 5,    6,    7,    8,
        3, null, null, null, 9,
        2, null, null, null, 10,
        1, null, null, null, 11,
        0, 15,   14,   13,   12
    ];
    const maps = tileGrid.map((tileNo, idx): Tile => {
        if(tileNo !== null) {
            return tiles[tileNo];
        } else {
            return {
                tileType: 'Empty',
                tileUnit: 'Empty',
                id: `map-${idx}`,
                x: 0,
                y: 0, 
                tileImageUrl: '',
                className: ''
            };
        }
    })

    return {
        maps
    }
}

export default getMap;