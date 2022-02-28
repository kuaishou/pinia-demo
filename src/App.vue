
<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <Xing></Xing>
  <XingButton></XingButton>
</template>


<script lang="ts" setup>
import Xing from './views/Xing.vue'
import XingButton from './views/XingButton.vue'
</script>


<style>
body{
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
</style>
