/*
 * @Description: 邢浩东的项目
 * @Version: 2.0
 * @Autor: 邢浩东
 * @Date: 2022-02-23 16:49:11
 * @LastEditors: 邢浩东
 * @LastEditTime: 2022-02-25 11:36:06
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'//注册pinia

const pinia=createPinia();//注册pinia
createApp(App).use(router).use(pinia).mount('#app')//注册pinia
