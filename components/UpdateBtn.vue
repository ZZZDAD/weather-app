<template>
  <div class="updateBtn" @click="update" :class="active">
    <i class="iconfont icon-update"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  },
  methods: {
    update() {
      this.$emit("update");
      this.active = "animate";
      setTimeout(() => {
        this.active = "";
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
.updateBtn {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  &.animate {
    animation: rotate 2s;
    -moz-animation: rotate 2s; /* Firefox */
    -webkit-animation: rotate 2s; /* Safari and Chrome */
    -o-animation: rotate 2s; /* Opera */
  }
  i {
    font-size: 1rem;
    font-weight: 1000;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

