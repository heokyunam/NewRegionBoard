<template>
    <div class="p-2">
        <img :src="diceImages[number-1]" >
    </div>
</template>
<script lang='ts' setup>
    import dice1 from '@/assets/images/dice_1.png'
    import dice2 from '@/assets/images/dice_2.png'
    import dice3 from '@/assets/images/dice_3.png'
    import dice4 from '@/assets/images/dice_4.png'
    import dice5 from '@/assets/images/dice_5.png'
    import dice6 from '@/assets/images/dice_6.png'

    const { number } = defineProps<{
        number: 1|2|3|4|5|6,
        // onRoll: (number: number) => void
    }>();

    console.log("change number", number);
    
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]
    // const diceImage = ref(diceImages[number-1]);
    // const diceImage = computed(() => diceImages[number-1])
</script>
<style lang='scss'>
    
</style>