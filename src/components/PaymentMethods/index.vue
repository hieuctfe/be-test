<template>
  <Section title="Chọn hình thức quyên góp">
    <PaymentMethodItem
      v-for="(item, index) in methods"
      :key="index"
      :payment-info="item"
      :is-checked="index === selectedMethod"
      @select-payment-method="_ => $emit('change-payment-method', _)"
    />
  </Section>
</template>

<script>
import Section from "@/common/Section";
import PaymentMethodItem from "./PaymentMethodItem";
export default {
  name: "PaymentMethods",
  components: { Section, PaymentMethodItem },
  props: {
    methods: {
      type: Array,
      default: () => []
    },
    selectedMethod: {
      type: Number,
      default: NaN
    }
  }
};
</script>

<style scoped></style>
