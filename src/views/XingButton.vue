
<template>
    <div>
        <button @click="handClick">方式一修改姓名</button>
        <button @click="handleClickPatch">方式二patch修改姓名</button>
        <button @click="handleClickMethed">方式三patch修改姓名</button>
        <button @click="xingStore.changes">方式四actions修改姓名</button>
        <button @click="changePhone">改变getters的值</button>
        <button @click="xingStore.getList">获取其他模块的stroe的数组LIST</button>
        
    </div>
</template>
<script lang="ts" setup>
import { mianStore } from "../stroe/index"
const xingStore = mianStore()

//第一种方法
const handClick = () => {
    xingStore.helloXing = '已修改为李白';
    xingStore.status = '邢浩东已修改';
    xingStore.count++;
}
//第二种方法性能多数据改变的时候更好一点
const handleClickPatch = () => {
    xingStore.$patch({
        helloXing:xingStore.helloXing = 'patch方法已修改为李白',
        status:xingStore.status = 'patch方法邢浩东已修改',
        count:xingStore.count+2
    })
}

//第二种方法$patch传递函数
const handleClickMethed = () => {
    xingStore.$patch((state)=>{
       state.count=state.count+8
       state.helloXing = 'patch33333方法已修改为李白'
    })
}

//第二种方法$patch传递函数
const changePhone = () => {
  xingStore.phone="18577888888"
}



</script>
<style lang="">
    
</style>