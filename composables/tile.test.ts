export const test = () => {
    assertEquals({label: '0', actual: tiles[0].tileType, expected: 'Dirt'});
    assertEquals({label: '2', actual: tiles[2].y, expected: 2});
    assertEquals({label: 'Corner', actual: tiles[4].y, expected: 4});
    assertEquals({label: 'Corner next', actual: tiles[5].y, expected: 4});
    assertEquals({label: 'Corner next', actual: tiles[5].x, expected: 0});
    assertEquals({label: 'Corner next2', actual: tiles[6].x, expected: 1});
    assertEquals({label: 'Corner2', actual: tiles[8].x, expected: 3});
    assertEquals({label: 'Corner2', actual: tiles[8].y, expected: 4});
    assertEquals({label: 'Corner2', actual: tiles[8].tileType, expected: 'Field'});
    assertEquals({label: 'Corner2 next 9', actual: tiles[9].y, expected: 3});
    assertEquals({label: 'Corner2 next', actual: tiles[9].tileType, expected: 'Field'});
    assertEquals({label: 'Corner3', actual: tiles[12].x, expected: 4});
    assertEquals({label: 'Corner3 next2', actual: tiles[14].x, expected: 2});
}

const assertEquals = <T>(args: {label: string, expected: T, actual: T}) => {
    if(args.expected === args.actual) {
        console.log(`${args.label} ${args.expected} is equals to ${args.actual}`);
    } else {
        console.log(`[ERROR] ${args.label} ${args.expected} but ${args.actual}`)
    }
}