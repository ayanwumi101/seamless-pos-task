import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProductsApi = () => {
  return axios.get(`${BASE_URL}/products`);
}