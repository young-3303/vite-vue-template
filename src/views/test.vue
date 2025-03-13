<template>
<div class="test">
  <van-button :loading="true" type="primary">click</van-button>
</div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {Dialog} from '@vant/compat'
import type { PropType } from 'vue'

interface Person {
  name: string;
  age: number;
  id: number;
}
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<Person[]>,
      required: true,
      default: () => []
    }
  },
  created() {
    this.$hello
    this.$thisTest([25, 22])
  }
})
</script>

<style scoped lang="less">

</style>
