<template>
  <div id="app">
    <payment-page />
  </div>
</template>

<script>
import PaymentPage from "./components/PaymentPage.vue";

export default {
  name: "App",
  components: {
    PaymentPage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #e5e5e5;
  height: 100vh;
}
</style>
