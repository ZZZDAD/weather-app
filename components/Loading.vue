<template>
  <div class="loading">
    Loading
    <span v-for="index in 3" :key='index' class="dot" :class="activeIndex==index?'active':''">.</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.activeIndex === 3) this.activeIndex = 0;
      this.activeIndex = this.activeIndex + 1;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer)
  },
};
</script>

<style lang="less" scoped>
.loading {
  margin-top: 3rem;
  text-align: center;
  font-weight: 700;
  .dot {
    display: inline-block;
    margin-right: 0.3rem;
    position: relative;
    &.active {
      animation: jump-animation 1s;
    }
  }
}
@keyframes jump-animation {
  0% {
    top: 0;
  }
  50% {
    top: -0.5rem;
  }
  100% {
    top: 0;
  }
}
</style>
