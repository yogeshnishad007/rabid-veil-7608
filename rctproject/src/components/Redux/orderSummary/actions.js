import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const getOrderReq = () => ({
  type: GET_ORDER_REQUEST,
});

export const getOrderSuccess = (payload) => ({
  type: GET_ORDER_SUCCESS,
  payload,
});

export const getOrderFailure = (payload) => ({
  type: GET_ORDER_FAILURE,
  payload,
});

export const usergetOrder = (payload) => (dispatch) => {
  dispatch(getOrderReq());
  axios
    .get(`http://localhost:5000/api/orders/get-order?username=${payload}`)
    .then((response) => {
      // handle success
      // console.log(response.data.map((item) => item.products));
      dispatch(
        getOrderSuccess(
          response.data.map((item) => item.products.map((item) => item))
        )
      );
    })
    .catch((error) => {
      // handle error
      console.log(error);
      dispatch(getOrderFailure(error));
    });
};
