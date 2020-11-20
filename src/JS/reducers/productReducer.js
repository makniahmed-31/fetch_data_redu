import { FETCH_PRODUCTS } from "../constants/actions-types";

const initialState = {
  products: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload
      };

    default:
      return state;
  }
};

export default reducer;

