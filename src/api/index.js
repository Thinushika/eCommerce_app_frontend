import axios from "axios";

const url = "http://localhost:3000/products";

const fetchProducts = () => axios.get(url);
