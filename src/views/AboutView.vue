<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  created() {
    this.$toast({
      type: 'success',
      message: '成功提示',
    });
    // this.$dialog.confirm({
    //   title: '提示',
    //   message: '这是一条提示消息',
    //   confirmButtonText: '确定',
    //   cancelButtonText: '取消',
    // })
    // console.log(this.$dialog)
  },
})
</script>
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
