import axios from "../setup/axios";
const getALlTransaction = (id) => {
  return axios.get(`/api/v1/transaction?id=${id}`);
};
const createTransaction = (data) => {
  return axios.post(`/api/v1/transaction`, data);
};
export { getALlTransaction, createTransaction };
