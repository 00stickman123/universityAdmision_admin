import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/auth/";
const BASE_URL = "http://localhost:8080/api/v1/"

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const addToCart = (values) => {
  return axios.post(BASE_URL + "shoppingCart/addtoCart", values, { headers: authHeader() });
};
const addToWishlist = (values) => {
  return axios.put(
    "http://localhost:8000/api/v1/product/wishlist",
    values,
    { headers: authHeader() }
  );
};
const getCart = () => {
  return axios.get(BASE_URL + "shoppingCart/viewCart", { headers: authHeader() });
};
const getOrder = () => {
  return axios.get(API_URL + "getallorders", { headers: authHeader() });
};
const deleteCart = (id) => {
  return axios.delete(API_URL + `cart/${id}`, { headers: authHeader() });
};
const getWishlist = () => {
  return axios.get(API_URL + "wishlist", { headers: authHeader() });
};
const applyCoupon = (values) => {
  return axios.post(API_URL + "cart/applycoupon", values, {
    headers: authHeader(),
  });
};
const postOrder = (values) => {
  return axios.post(API_URL + "cart/cash-order", values, {
    headers: authHeader(),
  });
};
const emptyCart = () => {
  return axios.delete(API_URL + "empty-cart", {
    headers: authHeader(),
  });
};
const updateCart = () => {
  return axios.get(API_URL + "updatecart", { headers: authHeader() });
};
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  addToCart,
  getCart,
  getWishlist,
  addToWishlist,
  deleteCart,
  applyCoupon,
  postOrder,
  emptyCart,
  getOrder,
  updateCart
};