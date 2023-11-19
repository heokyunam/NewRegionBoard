

export const getPosition = (map_length: number) => {
    const position = ref<number>(0);
    const moveFront = (value: number) => {
        position.value = (position.value + value + 1) % map_length;
    }

    return { position, moveFront }
}