/*
 * @Description: 邢浩东的项目
 * @Version: 2.0
 * @Autor: 邢浩东
 * @Date: 2022-02-24 17:32:35
 * @LastEditors: 邢浩东
 * @LastEditTime: 2022-02-24 17:34:14
 */
import {defineStore} from 'pinia'
export const xingStore=defineStore('xing',{
    state:()=>{
        return {
            list:['德玛','剑圣','大圣']
        }
    }
})

