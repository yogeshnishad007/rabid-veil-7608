import {
  ORDER_REQUEST,
  ORDER_REQUEST_SUCCESS,
  ORDER_REQUEST_FAILURE,
} from "./actionTypes";

export const OrderInitState = {
  resArr: [],
  message: "",
};

const orderReducer = (state = OrderInitState, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        ...state,
        resArr: [],
        message: "",
      };

    case ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        resArr: action.payload,
        message: "Order Placed Successfully",
      };

    case ORDER_REQUEST_FAILURE:
      return {
        ...state,
        resArr: [],
        message: "Error placing order",
      };

    default:
      return state;
  }
};

export default orderReducer;
