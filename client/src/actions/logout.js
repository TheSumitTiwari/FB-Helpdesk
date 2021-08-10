import { setAlert } from "./alerts";

import {
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  SHOW_LOADER,
  HIDE_LOADER,
} from "./types";

export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: SHOW_LOADER,
  });

  try {
    dispatch({
      type: LOGOUT_USER_SUCCESS,
    });
   
    dispatch({
      type: HIDE_LOADER,
    });
    
  } catch (err) {
    console.log(err);
    if (err) {
      dispatch(setAlert(err, "danger", 10000));
    }

    dispatch({
      type: LOGOUT_USER_FAIL,
    });
    dispatch({
      type: HIDE_LOADER,
    });
  }
};


