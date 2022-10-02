import axios from "axios";

import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_ATTEMPT,
  REG_SUCCESS,
  REG_FAILURE,
  LOGOUT,
} from "./actionTypes";

const loginAttempt = (payload) => ({
  type: LOGIN_ATTEMPT,
  payload,
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const loginUser = (payload) => async (dispatch) => {
  dispatch(loginAttempt(payload));
  var config = {
    method: "post",
    url: "http://localhost:5000/api/user/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };
  try {
    const result = await axios(config);
    dispatch(loginSuccess(result.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};

const regAttempt = (payload) => ({
  type: REG_ATTEMPT,
  payload,
});

const regSuccess = (payload) => ({
  type: REG_SUCCESS,
  payload,
});

const regFailure = (payload) => ({
  type: REG_FAILURE,
  payload,
});

export const registerUser = (payload) => async (dispatch) => {
  dispatch(regAttempt(payload));
  var config = {
    method: "post",
    url: "http://localhost:5000/api/user/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: payload,
  };

  try {
    const result = await axios(config);
    dispatch(regSuccess(result.data));
  } catch (err) {
    dispatch(regFailure(err.response.data));
  }
};

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});
