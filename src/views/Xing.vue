<!--
 * @Description: 邢浩东的项目
 * @Version: 2.0
 * @Autor: 邢浩东
 * @Date: 2022-02-23 17:14:39
 * @LastEditors: 邢浩东
 * @LastEditTime: 2022-02-24 16:28:35
-->
<template>
    <div>
        <div>姓名： {{ xingStore.helloXing }}</div>
        <div>修改次数{{ xingStore.count }}</div>

        <div>手机号：{{xingStore.phoneHide}}</div>
        <hr />
        <div>姓名： {{ helloXing }}</div>
        <div>修改次数{{ count }}</div>
        <div>手机号：{{ phoneHide }}</div>


    </div>
</template>
<script lang="ts" setup>
import { mianStore } from "../stroe/index"
import {storeToRefs} from 'pinia'//1、解构方法转化为响应式数据



const xingStore = mianStore()
const {helloXing,count,phoneHide}=storeToRefs(xingStore)//1、解构方法转化为响应式数据
</script>
<style lang="">
    
</style>