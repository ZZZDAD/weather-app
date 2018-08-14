<template>
  <div class="notice">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      defalut: ""
    }
  }
};
</script>

<style lang="less" scoped>
.notice {
  text-align: center;
  position: fixed;
  top: 1rem;
  left: 4rem;
  right: 4rem;
  border-radius: 10px;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  color: rgba(225, 225, 225, 0.8);
  font-size: 0.8rem;
}
</style>

