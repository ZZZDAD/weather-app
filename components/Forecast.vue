<template>
  <div class="forecast" v-if="forecast[0]">
    <ForecastItem v-for="(item, index) in forecast" :key="item.date" v-if="index!=0" :item='item'></ForecastItem>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ForecastItem from "./ForecastItem.vue";

export default {
  components: {
    ForecastItem
  },
  computed:{
  ...mapState("weather", ["forecast"])
  }
};
</script>

<style lang="less">
.forecast {
  margin-top: 3rem;
  color: rgba(0, 0, 0, 0.7);
  .item {
    &:nth-child(1) {
      border-left: 0px;
    }
    text-align: center;
    width: 24.6%;
    display: inline-block;
    border-left: 1px solid rgba(0, 0, 0, 0.4);
    .date {
      display: block;
      font-size: 0.9rem;
      margin-bottom: 0.2rem;
    }
    i {
      font-size: 1.8rem;
    }
    .type {
      display: block;
      font-size: 0.8rem;
    }
    .wendu-range {
      font-size: 0.6rem;
    }
  }
}
</style>

