<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <van-button type="default">vant默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <!-- 使用 click-counter 组件 -->
    <click-counter />
  </div>
</template>

<script>
// 导入 click-counter 组件
import ClickCounter from "@/components/click-counter";

export default {
  // 声明在当前组件下使用 counter-click 组件
  components: { ClickCounter },

  data() {
    return {
      msg: "Hello"
    };
  },

  methods: {
    clickHandle() {
      this.msg = "Clicked!!!!!!";
    }
  }
};
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>