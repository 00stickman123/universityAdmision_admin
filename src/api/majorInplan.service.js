import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/";
const getMajorInPlan = () => {
  return axios.get(API_URL + "majorInPlan/");
};
const getMajorInPlanById = (id) => {
  return axios.get(`${API_URL}majorInPlan/${id}`);
};
const postMajorInPlan = (values) => {
  return axios.post(API_URL + "majorInPlan/", values);
};
const putMajorInPlan = (id,values) => {
  return axios.put(`${API_URL}majorInPlan/${id}`, values, {
  });
};
const deleteMajorInPlan = (id) => {
  return axios.delete(`${API_URL}majorInPlan/${id}`);
};
export default {
    getMajorInPlanById,
    getMajorInPlan,
    postMajorInPlan,
    putMajorInPlan,
    deleteMajorInPlan,
};
