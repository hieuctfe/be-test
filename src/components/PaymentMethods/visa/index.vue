<template>
  <Section title="chọn số tiền quyên góp">
    <template>
      <div class="visa-items-container">
        <VisaItem
          v-for="(item, index) in visaNumberAmount"
          :key="index"
          :is-checked="selectedVisaMoney === item"
          :amount="item"
          @visa-amount-change="value => (selectedVisaMoney = value)"
        />
      </div>
      <button class="pay-button" @click="paymentProcessclick">
        Tiến hành thanh toán
      </button>
    </template>
  </Section>
</template>

<script>
import Section from "@/common/Section";
import VisaItem from "./VisaItem";
export default {
  name: "PaymentMethods",
  components: { Section, VisaItem },
  data() {
    return {
      selectedVisaMoney: 100000
    };
  },
  computed: {
    visaNumberAmount() {
      return [1, 2, 3, 4, 5, 10].map(_ => _ * 100000);
    }
  },
  methods: {
    paymentProcessclick() {
      this.$emit("payment-process", parseInt(this.selectedVisaMoney));
    }
  }
};
</script>

<style scoped>
.visa-items-container {
  padding-left: 16px;
}
.pay-button {
  position: fixed;
  background: #ffbb00;
  border-radius: 2px;
  border: none;
  bottom: 16px;
  width: calc(100vw - 32px);
  left: 12px;
  height: 40px;
  font-weight: bold;
  color: #081f42;
}
</style>
