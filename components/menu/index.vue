<template>
    <div class="mx-[26px] my-[56px] ">
        <div class="flex justify-between">
            <div class="flex flex-col items-center"
                v-for="info in menuInfo" :key="info.name">
                <div class="font-bold"
                    :class="{'text-inactive': !info.active}">
                    {{ info.name }}
                </div>
                <div class="bg-active w-10 h-1" v-if="info.active">

                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    const menuInfo = ref([
        {
            name: 'INVENTORY',
            active: true
        },
        {
            name: 'CRAFT',
            active: false
        },
        {
            name: 'EQUIPMENT',
            active: false
        },
        {
            name: 'ACTION',
            active: false
        },
    ])
</script>
<style lang='scss'>
    
</style>