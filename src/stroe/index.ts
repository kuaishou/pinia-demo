/*
 * @Description: 邢浩东的项目
 * @Version: 2.0
 * @Autor: 邢浩东
 * @Date: 2022-02-23 17:04:26
 * @LastEditors: 邢浩东
 * @LastEditTime: 2022-02-24 17:36:14
 */
// 1、定义状态容器
// 2、修改容器中的state
// 3、仓库中action的使用

import {defineStore} from 'pinia'
import {xingStore} from './xing'
export const mianStore=defineStore('main',{
    state:()=>{
        return {
            helloXing:'hello 邢浩东',
            status:"已修改",
            count:0,
            phone:"18575699825"
        }
    },
    getters:{
        phoneHide(state){
            console.log('getter调用了')
            return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/,'$1****$2')
        }

    },
    actions:{
        changes(){
            this.helloXing="action修改姓名杜甫"
            this.count++
        },
        getList(){
            console.log(xingStore().list)
        }
    }
})

