<template>
  <div class="page-index">
    <Date></Date>
    <UpdateBtn @update='update'></UpdateBtn>
    <Notice v-show='showNotice' :text='noticeText'></Notice>
    <Today></Today>
    <Loading v-if="isLoading"></Loading>
    <Forecast v-show="!isLoading"></Forecast>
    <CityBtn @showInput='showInput'></CityBtn>
    <CityInput v-show="showCityInput" @hideInput='hideInput'></CityInput>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import cookie from "@/utils/cookie";
import UpdateBtn from "@/components/UpdateBtn.vue";
import Notice from "@/components/Notice.vue";
import Date from "@/components/Date.vue";
import Today from "@/components/Today.vue";
import Forecast from "@/components/Forecast.vue";
import CityBtn from "@/components/CityBtn.vue";
import CityInput from "@/components/CityInput.vue";
import Loading from "@/components/Loading.vue";
function setState(store) {}

export default {
  name: "index",
  components: {
    UpdateBtn,
    Notice,
    Date,
    Today,
    Forecast,
    CityBtn,
    CityInput,
    Loading
  },
  data() {
    return {
      isLoading: false,
      noticeText: "",
      showNotice: false,
      showCityInput: false
    };
  },
  computed: {
    ...mapState("weather", ["city", "wendu"])
  },
  watch: {
    async city(val, oldVal) {
      if (oldVal) {
        this.isLoading = true;
        await this.$store.dispatch("weather/setWeather");
        this.isLoading = false;
        setTimeout(() => {
          if (this.wendu) {
            this.notice("切换地区成功");
          } else {
            this.notice("您当前输入的地区不支持查询");
          }
        }, 200);
        window.localStorage.setItem("weather_city", decodeURIComponent(val));
        cookie.setCookie("weather_city", decodeURIComponent(val), 7);
      }
    }
  },
  metaInfo: {
    title: "weather",
    meta: [
      {
        name: "keywords",
        content: "lavas PWA"
      }
    ]
  },
  async mounted() {
    this.isLoading = true;
    await this.$store.dispatch(
      "weather/setCity",
      encodeURIComponent(
        window.localStorage.getItem("weather_city") ||
          cookie.getCookie("weather_city") ||
          "广州"
      )
    );
    await this.$store.dispatch("weather/setWeather");
    this.isLoading = false;
  },
  methods: {
    async update() {
      this.isLoading = true;
      await this.$store.dispatch("weather/setWeather");
      this.isLoading = false;
      this.notice("已加载最新数据");
    },
    showInput() {
      this.showCityInput = true;
    },
    hideInput() {
      this.showCityInput = false;
    },
    notice(text) {
      this.noticeText = text;
      this.showNotice = true;
      setTimeout(() => {
        this.showNotice = false;
      }, 1500);
    }
  }
};
</script>

<style lang="less">
.page-index {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
  padding: 1rem;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}
</style>
