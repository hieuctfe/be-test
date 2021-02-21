<template>
  <div class="bank-info-container">
    <div class="bank-title">
      {{ title }}
    </div>
    <div class="bank-info-detail">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankInfo",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
.bank-info-container {
  .bank-title {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #5e6d84;
    margin-top: 12px;
    font-weight: bold;
  }
  .bank-info-detail {
    line-height: 20px;
    margin-top: 4px;
  }
}
</style>
