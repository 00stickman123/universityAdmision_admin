import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/";
const getUniversity = () => {
  return axios.get(API_URL + "university/");
};
const getUniversityById = (id) => {
  return axios.get(`${API_URL}university/${id}`);
};
const postUniversity = (values) => {
  return axios.post(API_URL + "university/", values);
};
const putUniversity = (id,values) => {
  return axios.put(`${API_URL}university/${id}`, values, {
  });
};
const deleteUniversity = (id) => {
  return axios.delete(`${API_URL}university/${id}`);
};
export default {
    getUniversity,
    getUniversityById,
    postUniversity,
    putUniversity,
    deleteUniversity,
};
