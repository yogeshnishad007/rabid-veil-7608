import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
} from "./actionTypes";

export const getOrderInitState = {
  summaryArr: [],
};

const summaryReducer = (state = getOrderInitState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return {
        ...state,
        summaryArr: [],
      };

    case GET_ORDER_SUCCESS:
      return {
        ...state,
        summaryArr: action.payload,
      };

    case GET_ORDER_FAILURE:
      return {
        ...state,
        summaryArr: [],
      };

    default:
      return state;
  }
};

export default summaryReducer;
