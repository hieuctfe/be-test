import Api from "@/utils/api";

export async function fetchBankInfo() {
  const res = await Api.get(`/bank`);
  return res.data;
}

export async function submitCardPayment(amount) {
  const res = await Api.post(`/card`, { amount });
  return res.data;
}
