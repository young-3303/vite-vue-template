<script setup lang="ts">
import {computed, ref} from "vue";

const value = ref(0)
const num = computed(() => value.value * 1.2)
</script>

<template>
<h1>hala</h1>
  <input v-model.number="value" />
  <span>{{num}}</span>
</template>

<style scoped lang="less">

</style>
