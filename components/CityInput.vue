<template>
  <div class="city-input">
    <div class="box">
      <span class="label">
        地区
      </span><input type="text" v-model="value">
      <p class="tip">*请输入 县/市/区</p>
      <button class="confirm" @click="confirm">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    async confirm() {
      if (!this.value) {
        this.$emit("hideInput");
        return;
      }
      await this.$store.dispatch(
        "weather/setCity",
        encodeURIComponent(this.value)
      );
      this.value = "";
      this.$emit("hideInput");
    }
  }
};
</script>

<style lang="less" scoped>
.city-input {
  z-index: 99;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4); // padding: 1rem;
  text-align: center;
  .box {
    padding: 2rem 1rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    border: 2px solid rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: white;
    .label {
      padding: 0.1rem 0.4rem;
      display: inline-block;
      height: 1.5rem;
      line-height: 1.5rem;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      border: 2px solid black;
      vertical-align: top;
      border-right: transparent;
    }
    input {
      text-align: center;
      padding: 0.1rem;
      display: inline-block;
      height: 1.5rem;
      line-height: 1.5rem;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      border: 2px solid black;
      vertical-align: top;
    }
    .tip {
      margin-right: 2rem;
      text-align: right;
      font-size: 0.7rem;
      color: rgba(0, 0, 0, 0.6);
    }
    .confirm {
      margin: 0 auto;
      display: block;
      margin-top: 1.5rem;
      border: transparent;
      background: white;
    }
  }
}
</style>
