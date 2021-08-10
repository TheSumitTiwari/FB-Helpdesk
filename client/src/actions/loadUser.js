import axios from "axios";

import {
  USER_LOADED,
  AUTH_ERROR,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { BACKEND_PORT } from "../config/portConfig";
// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    console.log(localStorage.token);
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${BACKEND_PORT}/secret`);
    console.log(res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });

  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};