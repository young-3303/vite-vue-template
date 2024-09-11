
<script lang="ts" setup>
import { Button } from 'vant';
import { Image as VanImage } from 'vant';
import logo from '@/assets/logo.svg'
import {onMounted} from "vue";

function Delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('执行完毕')
    }, 2000)
  })
}
async function foo() {
  Promise.resolve('foo').then(res => {
    console.log(res);
  })
}
onMounted( async () => {
  foo()
})
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-image :src="logo"></van-image>
    <Button type="primary">click</Button>
  </div>
</template>
<style lang="less" scoped>
h1 {
  font-size: 36px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
