<template>
  <div class="section-container">
    <div v-if="title" class="section-title">
      {{ title }}
    </div>
    <div class="section-info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
.section-container {
  padding-top: 18px;
  .section-title {
    margin-left: 16px;
    margin-bottom: 6px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #5e6d84;
  }
}
</style>
