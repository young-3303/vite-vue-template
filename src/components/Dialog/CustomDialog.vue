<template>
  <van-dialog
    :show="visible"
    :title="title"
    :message="message"
    :show-confirm-button="showConfirmButton"
    :show-cancel-button="showCancelButton"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <!-- 可以在这里添加自定义的内容 -->
    <template #content>
      <slot name="content"></slot>
    </template>
  </van-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Dialog as vanDialog } from 'vant';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  showConfirmButton: {
    type: Boolean,
    default: true,
  },
  showCancelButton: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['confirm', 'cancel']);

const visible = ref(false);

const open = () => {
  visible.value = true;
};

const close = () => {
  visible.value = false;
};

const onConfirm = () => {
  emits('confirm');
  close();
};

const onCancel = () => {
  emits('cancel');
  close();
};

defineExpose({
  open,
  close,
});
</script>
