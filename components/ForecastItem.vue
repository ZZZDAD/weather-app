<template>
  <div class="item">
    <span class="date">
      周{{ item.date.slice(item.date.length-1)}}
    </span>
    <i class="iconfont" :class="typeIcon"></i>
    <span class="type"> {{ item.type }} </span>
    <span class="wendu-range">
      {{ item.low.slice(2).slice(1,3) }} - {{ item.high.slice(2).slice(1,3) }}℃
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      reqiured: true
    }
  },
  computed: {
    typeIcon() {
      let type = this.item.type;
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


