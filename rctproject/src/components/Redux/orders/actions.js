import {
  ORDER_REQUEST,
  ORDER_REQUEST_SUCCESS,
  ORDER_REQUEST_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const orderReq = () => ({
  type: ORDER_REQUEST,
});

export const orderReqSuccess = (payload) => ({
  type: ORDER_REQUEST_SUCCESS,
  payload,
});

export const orderReqFailure = (payload) => ({
  type: ORDER_REQUEST_FAILURE,
  payload,
});

export const userOrder = (payload) => (dispatch) => {
  dispatch(orderReq());
  axios
    .post("http://localhost:5000/api/orders/add-order", {
      username: payload.username,
      full_address: payload.full_address,
      products: payload.products,
    })
    .then((res) => {
      // console.log(res);
      dispatch(orderReqSuccess(res));
    })
    .catch((err) => {
      console.log(err);
      dispatch(orderReqFailure(err));
    });
};
