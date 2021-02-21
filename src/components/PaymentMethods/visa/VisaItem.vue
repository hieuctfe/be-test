<template>
  <label class="visa-item-container">
    <input
      type="radio"
      name="visa"
      :value="amount"
      :checked="isChecked"
      @change="visaInfoChangeHandler"
    />
    <span>{{ amount | vnDongFormat }}</span>
    <div class="blue-border"></div>
  </label>
</template>

<script>
export default {
  name: "VisaItem",
  components: {},
  filters: {
    vnDongFormat(value) {
      return value
        .toLocaleString("it-IT", {
          style: "currency",
          currency: "VND"
        })
        .replace("VND", "đ");
    }
  },
  props: {
    amount: {
      type: Number,
      default: 0
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatCurrentcy() {},
    visaInfoChangeHandler(e) {
      this.$emit("visa-amount-change", e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
.visa-item-container {
  width: 104px;
  background: #ffffff;
  display: inline-block;
  padding: 18px 0px;
  /* shadow/low */

  box-shadow: 0px 3px 14px rgba(0, 0, 29, 0.12);
  border-radius: 2px;
  text-align: center;
  margin-right: 8px;
  margin-top: 8px;
  position: relative;
  span {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: bold;
    color: #00003b;
  }
  input {
    display: none;
  }
  .blue-border {
    position: absolute;
    top: -1px;
    left: -1px;
  }
  input:checked ~ .blue-border {
    width: 100%;
    height: 100%;
    border: 2px solid #1366e9;
  }
}
</style>
