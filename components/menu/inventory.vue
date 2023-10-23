<template>
    <!-- filter -->
    <div class="flex mt-5">
        <menu-filter name="음식" />
        <menu-filter name="도구" />
    </div>
    <!-- table -->
    <table class="mt-6 w-[100%]">
        <thead class="bg-slate-50 border-y-[2px] border-table-line text-table-text">
            <th class="pl-[16px] py-[20px] text-left">Name</th>
            <th class="px-[16px] py-[20px] w-[86px]">Spend</th>
        </thead>
        <tbody class="bg-tbody">
            <tr class="border-y-[2px] border-table-line text-table-text"
                v-for="item in inventories" :key="item.id">
                <td class="px-[20px] py-[10px]">{{ item.name }}</td>
                <td class="px-[20px] py-[10px] text-right">{{ item.count }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script lang='ts' setup>
    const inventories = ref([
        {
            id: 1,
            name: '나무',
            count: 5
        },
        {
            id: 2,
            name: '조약돌',
            count: 10
        },
        {
            id: 3,
            name: '힘줄',
            count: 5
        },
        {
            id: 4,
            name: '나뭇잎',
            count: 5
        },
        {
            id: 5,
            name: '부싯돌',
            count: 5
        },
    ])
</script>
<style lang='scss'>
    
</style>
