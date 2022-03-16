import axios from "axios";

const url = "http://localhost:3000/products";

export const fetchProducts = () => axios.get(url);
export const createProducts = (newProduct) => axios.post(url, newProduct);
