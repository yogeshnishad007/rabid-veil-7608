import { GET_CART_DATA_LENGTH } from "./actionTypes";

const initState = {
  cartData: 0,
};

const cartLengthReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CART_DATA_LENGTH:
      return {
        ...state,
        cartData: action.payload,
      };

    default:
      return state;
  }
};

export default cartLengthReducer;
