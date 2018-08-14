<template>
  <div class="city-btn">
    <div class="shell" @click='inputCity'></div>
    <div class="text" @click='inputCity'>
      切换<br> 地区
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    inputCity() {
      this.$emit("showInput");
    }
  }
};
</script>

<style lang="less" scoped>
.city-btn {
  width: 99%;
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  height: 3rem;
  &:active {
    .shell {
      transform: scale(0.95) translate(-50%, -50%) rotate(45deg);
    }
  }
  .shell {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.8);
  }
  .text {
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 1rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.6rem;
    color: white;
  }
}
</style>
