<template>
  <div class="payment-page-container">
    <PaymentMethods
      :methods="methods"
      :selected-method="selectedMethodIndex"
      @change-payment-method="changePaymentMethodHandler"
    />
    <component
      :is="selectedMethodComponent"
      :bank-info="bankInfo"
      @payment-process="processPayment"
    />
    <ConfirmDialog
      v-if="showSuccessModal"
      title="Thanh toán thành công"
      description="Xin chân thành cảm ơn sự ủng hộ của quý khách hàng"
      @click-ok="showSuccessModal = false"
    />
  </div>
</template>

<script>
import PaymentMethods from "./PaymentMethods";
import Visa from "./PaymentMethods/visa";
import Bank from "./PaymentMethods/bank";
import ConfirmDialog from "@/common/ConfirmDialog";
import { fetchBankInfo, submitCardPayment } from "@/api/payment";
export default {
  name: "PaymentPage",
  components: {
    PaymentMethods,
    Visa,
    Bank,
    ConfirmDialog
  },
  props: {},
  data() {
    return {
      selectedMethodIndex: 0,
      methods: [
        {
          icon: "visa",
          methodName: "visa",
          renderConponent: "Visa",
          text: "Visa ...2725" // Lazy =))
        },
        {
          icon: "bank",
          methodName: "bank",
          renderConponent: "Bank",
          text: "Chuyển khoản ngân hàng"
        }
      ],
      bankInfo: null,
      showSuccessModal: false
    };
  },
  computed: {
    selectedMethodComponent() {
      return this.methods[this.selectedMethodIndex].renderConponent;
    }
  },
  async mounted() {
    try {
      this.bankInfo = await fetchBankInfo();
    } catch (e) {
      this.methods.pop();
      alert(e);
    }
  },
  methods: {
    changePaymentMethodHandler(paymentInfo) {
      this.selectedMethodIndex = this.methods.findIndex(
        _ => _.methodName === paymentInfo.methodName
      );
    },
    async processPayment(amount) {
      try {
        const paymentResult = await submitCardPayment(amount);
        if (paymentResult && paymentResult.success) {
          this.showSuccessModal = true;
        } else {
          alert("fail");
        }
      } catch (e) {
        alert("fail");
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
