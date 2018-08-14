<template>
  <div class="today">
    <div class="type">
      <i class="iconfont" :class="typeIcon"></i>
      <span class="text" v-if="forecast[0]">{{forecast[0].type}}</span>
      <span class="wendu-range" v-if="forecast[0]">{{forecast[0].low.slice(2).slice(1,3)}} - {{forecast[0].high.slice(2).slice(1,3)}}℃</span>
    </div>
    <span class="city">{{decodeURIComponent(city)}}</span>
    <i class="iconfont icon-iconset0480"></i>
    <span class="wendu" v-if="wendu"> {{wendu}}℃</span>
    <i class="iconfont icon-kongqishidu"></i>
    <span class="shidu"> {{shidu}}</span><br>
    <span class="quality" v-if="quality"> 空气质量：{{quality}} </span>
    <span class="notice" v-if="forecast[0]">{{forecast[0].notice}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("weather", ["city", "shidu", "wendu", "quality", "forecast"]),
    typeIcon() {
      let type = this.forecast[0] ? this.forecast[0].type : "";
      if (type.includes("雨") && type.includes("雪")) {
        // 雨夹雪
        return "icon-yujiaxue";
      } else if (type.includes("雨")) {
        // 雨
        if (type.includes("暴")) {
          return "icon-baoyu";
        } else if (type.includes("雷")) {
          return "icon-leizhenyu";
        } else if (type.includes("阵")) {
          return "icon-zhenyu";
        } else if (type.includes("大")) {
          return "icon-dayu";
        } else if (type.includes("中")) {
          return "icon-zhongyu";
        } else if (type.includes("小")) {
          return "icon-xiaoyu";
        } else {
          return "icon-yu";
        }
      } else if (type.includes("雪")) {
        // 雪
        if (type.includes("暴")) {
          return "icon-baoxue";
        } else if (type.includes("阵")) {
          return "icon-zhenxue";
        } else if (type.includes("大")) {
          return "icon-daxue";
        } else if (type.includes("中")) {
          return "icon-zhongxue";
        } else if (type.includes("小")) {
          return "icon-xiaoxue";
        } else {
          return "icon-xue";
        }
      } else if (type.includes("晴")) {
        return "icon-qing";
      } else if (type.includes("阴")) {
        return "icon-yin";
      } else if (type.includes("雾")) {
        return "icon-wu";
      } else if (type.includes("沙") || type.includes("尘")) {
        return "icon-shachenbao";
      } else if (type.includes("云")) {
        return "icon-duoyun";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.today {
  border: dashed 2px black;
  overflow: hidden;
  position: relative;
  padding: 0.5rem;
  min-height: 6rem;
  .type {
    float: right;
    text-align: center;
    margin-left: 2rem;
    i {
      display: block;
      font-size: 3rem;
    }
    .text {
      display: block;
      font-weight: 600;
      position: relative;
      top: -0.2rem;
    }
    .wendu-range {
      display: block;
      font-size: 0.8rem;
    }
  }
  .city {
    font-size: 1.5rem;
    display: block;
    margin-bottom: 0.3rem;
  }
  .wendu {
    margin-right: 1rem;
  }
  .quality {
    display: block;
    margin-top: 0.6rem;
    font-size: 0.9rem;
  }
  .notice {
    position: absolute;
    bottom: 0.5rem;
    font-size: 0.8rem;
  }
}
</style>
