import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/";
const getProduct = () => {
  return axios.get(API_URL + "home/getAllProduct");
};
const getProductById = (id) => {
  return axios.get(`${API_URL}home/getProductById/${id}`);
};
const postProduct = (values) => {
  return axios.post(API_URL + "product/createProduct", values, { headers: authHeader() });
};
const putProduct = (id,values) => {
  return axios.put(`${API_URL}product/updateProduct/${id}`, values, {
    headers: authHeader(),
  });
};
const deleteProduct = (id) => {
  return axios.delete(`${API_URL}product/deleteProduct/${id}`, { headers: authHeader() });
};
export default {
  postProduct,
  getProduct,
  deleteProduct,
  getProductById,
  putProduct,
};
