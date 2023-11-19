<template>
    <map-dice 
       class="absolute top-0"
       v-if="drawing_index === 12" 
       :number="numberRef"
       @click="onRoll"
    />
</template>
<script lang='ts' setup>
    import { RollTheDice, UserOrderFunction } from "@/composables/ui";

    const { drawing_index, user_order_function } = defineProps<{
        drawing_index: number,
        user_order_function: UserOrderFunction,
    }>();

    declare type DiceNumber = 1|2|3|4|5|6;

    const timerRef = ref<NodeJS.Timeout>();
    const numberRef = ref<DiceNumber>(6);

    const onRoll = () => {
        if(timerRef.value) {
            clearInterval(timerRef.value);

            const order: RollTheDice = {
                value: numberRef.value
            };

            user_order_function(order);
            timerRef.value = undefined;
        } else {
            timerRef.value = setInterval(() => {
                numberRef.value = Math.floor(Math.random()*6) as DiceNumber;
                // diceImage.value = diceImages[numberRef.value];
            },100)
        }
    }
</script>
<style lang='scss'>
    
</style>