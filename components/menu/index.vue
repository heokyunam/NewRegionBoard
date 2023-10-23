<template>
    <div class="mx-[26px] my-[56px] w-[400px]">
        <!-- tab -->
        <div class="flex justify-between">
            <div class="flex flex-col items-center cursor-pointer"
                v-for="info in menuInfo" :key="info.name"
                @click="onClickTabMenu(info.name)">
                <div class="font-bold"
                    :class="{'text-inactive': !info.active}">
                    {{ info.name }}
                </div>
                <div class="bg-active w-10 h-1" v-if="info.active">

                </div>
            </div>
        </div>
        <menu-inventory v-if="menuInfo[0].active"/>
        <menu-craft v-if="menuInfo[1].active" />
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

    const onClickTabMenu = (name: string) => {
        menuInfo.value = menuInfo.value.map(item => {
            if(name === item.name) {
                return {
                    ...item,
                    active: true
                }
            } else {
                return {
                    ...item,
                    active: false
                }
            }
        })
    }
</script>
<style lang='scss'>
    * {
        font-family: 'Noto Sans KR';
    }
</style>