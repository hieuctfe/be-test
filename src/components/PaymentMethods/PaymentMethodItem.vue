<template>
  <label class="payment-method-item-container">
    <input
      type="radio"
      name="method"
      :value="paymentInfo.text"
      :checked="isChecked"
      @change="paymentInfoChangeHandler"
    />
    <svg-icon class="method-icon" :name="paymentInfo.icon" />
    <span>{{ paymentInfo.text }}</span>
    <svg-icon class="check-icon" name="check" />
  </label>
</template>

<script>
import SvgIcon from "../../common/SvgIcon.vue";
export default {
  name: "PaymentMethodItem",
  components: { SvgIcon },
  props: {
    paymentInfo: {
      type: Object,
      default: () => ({})
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    paymentInfoChangeHandler() {
      this.$emit("select-payment-method", this.paymentInfo);
    }
  }
};
</script>

<style scoped lang="scss">
.payment-method-item-container {
  background: white;
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 16px;
  position: relative;
  input {
    display: none;
  }
  span {
    height: 20px;
    font-size: 14px;
    line-height: 20px;
  }
  .check-icon {
    visibility: hidden;
    position: absolute;
    right: 12px;
    top: 10px;
    bottom: 10px;
  }
  .method-icon {
    margin-right: 12px;
    vertical-align: middle;
  }
  input:checked ~ .check-icon {
    visibility: unset;
  }
}
</style>
