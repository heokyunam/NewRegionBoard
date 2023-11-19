import { RollTheDice, UserOrderFunction } from "./index.type";


export declare type DiceNumber = 1|2|3|4|5|6;

export const getDice = () => {

    const _timerRef = ref<NodeJS.Timeout>();
    const numberRef = ref<DiceNumber>(6);

    const animateDice = (onEnd: UserOrderFunction) => {
        if(_timerRef.value) {
            clearInterval(_timerRef.value);

            const order = new RollTheDice(numberRef.value);

            onEnd(order);
            _timerRef.value = undefined;
        } else {
            _timerRef.value = setInterval(() => {
                numberRef.value = Math.floor(Math.random()*6) as DiceNumber;

            },100)
        }
    }

    return { numberRef, animateDice }

}