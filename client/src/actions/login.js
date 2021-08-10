import axios from "axios";
import { setAlert } from "./alerts";

import { LOGIN_SUCCESS, LOGIN_FAIL, RESET_LOGOUT_USER } from "./types";

import { loadUser } from "./loadUser";
import { BACKEND_PORT } from "../config/portConfig";

export const login = ({ userId, accessToken }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  await dispatch({
    type: RESET_LOGOUT_USER,
  });

  const body = JSON.stringify({ userId, accessToken });

  try {
    const res = await axios.post(
      `${BACKEND_PORT}/login`,
      body,
      config
    );
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: res.data.token },
    });
    
    dispatch(loadUser());
    dispatch(setAlert("logged in succesfully", "success"));

  } catch (err) {
    // const errors = err.response.data.errors;
    // if (err.response.data === "Unauthorized") {
    //   dispatch(setAlert("Credentials not Matched", "error"));
    // }
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    // }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

