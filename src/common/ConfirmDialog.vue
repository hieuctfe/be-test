// This dialog need to be globaly
<template>
  <div class="overlay">
    <div class="dialog-container">
      <svg-icon name="success-check" />
      <div class="title">
        {{ title }}
      </div>
      <div class="description">
        {{ description }}
      </div>
      <button @click="$emit('click-ok')">
        OK
      </button>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";
export default {
  name: "ConfirmDialog",
  components: { SvgIcon },
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.65);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  .dialog-container {
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 296px;
    height: 206;
    transform: translate(-50%, -50%);
    padding: 24px;
    .title {
      margin-top: 16px;
      font-weight: bold;
      font-size: 18px;
    }
    .description {
      margin-top: 12px;
      margin-bottom: 20px;
    }
  }
  button {
    width: 300px;
    height: 40px;
    text-align: center;
    font-weight: bold;
    background: #ffbb00;
    border-radius: 2px;
    border: none;
    padding: 10px 12px;
    margin: auto;
  }
}
</style>
