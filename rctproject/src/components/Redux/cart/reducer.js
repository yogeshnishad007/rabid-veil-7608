import { ADD_PROD, SUB_PROD } from "./actionTypes";

const initState = {
  cartChange: "1",
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PROD:
      return {
        ...state,
        cartChange: action.payload,
      };

    case SUB_PROD:
      return {
        ...state,
        cartChange: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
