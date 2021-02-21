<template>
  <Section title="Thông tin chuyển khoản">
    <div class="bank-infos-container">
      <BankInfo title="Tên tài khoản">
        {{ bankInfo.account }}
      </BankInfo>
      <div class="bank-number-container">
        <div class="bank-number">
          <BankInfo title="Số tài khoản">
            {{ bankInfo.number }}
          </BankInfo>
        </div>
        <button class="copy-button" @click="copyToClipboard">
          Copy STK
        </button>
      </div>
      <BankInfo title="Chi nhánh ngân hàng">
        {{ bankInfo.bank }}
      </BankInfo>
      <BankInfo title="Nội dung chuyển tiền">
        {{ bankInfo.message }}
      </BankInfo>
    </div>
  </Section>
</template>

<script>
import Section from "@/common/Section";
import BankInfo from "./BankInfo";
import { copyToClipboard } from "@/utils/clipboard";
export default {
  name: "PaymentMethods",
  components: { Section, BankInfo },
  props: {
    bankInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    copyToClipboard() {
      copyToClipboard(this.bankInfo.number);
      alert("Copied");
    }
  }
};
</script>

<style scoped lang="scss">
.bank-infos-container {
  padding: 12px 16px;
  background: white;
  .bank-number-container {
    display: flex;
    .bank-number {
      flex: 1;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
    }
    .copy-button {
      background: #f2f5f7;
      border-radius: 2px;
      width: 99px;
      height: 32px;
      border: none;
      margin-top: 12px;
    }
  }
}
</style>
