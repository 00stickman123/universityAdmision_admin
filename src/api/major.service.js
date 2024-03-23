import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/";
const getMajor = () => {
  return axios.get(API_URL + "major/");
};
const getMajorById = (id) => {
  return axios.get(`${API_URL}major/${id}`);
};
const postMajor = (values) => {
  return axios.post(API_URL + "major/", values);
};
const putMajor = (id,values) => {
  return axios.put(`${API_URL}major/${id}`, values, {
  });
};
const deleteMajor = (id) => {
  return axios.delete(`${API_URL}major/${id}`);
};
export default {
    getMajorById,
    getMajor,
    postMajor,
    putMajor,
    deleteMajor,
};
