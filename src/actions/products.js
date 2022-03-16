import * as api from "../api/index.js";

// ----action creators----

// get product details
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add new product
export const createProducts = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProducts(product);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
