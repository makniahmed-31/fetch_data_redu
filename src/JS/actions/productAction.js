import { FETCH_PRODUCTS } from "../constants/actions-types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/product");

    console.log(res.data);

    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

