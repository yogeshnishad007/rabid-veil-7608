import { ADD_PROD, SUB_PROD } from "./actionTypes";

export const addProd = (payload) => ({
  type: ADD_PROD,
  payload,
});

export const subProd = (payload) => ({
  type: SUB_PROD,
  payload,
});
