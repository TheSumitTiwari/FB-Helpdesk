import {
    USER_LOADED,
    AUTH_ERROR,
  } from "../actions/types";
  
  const initialState = {
    detailsLoaded: null,
    message: null,
    user: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          detailsLoaded:true,
          loading: false,
          user: payload,
        };
  
      case AUTH_ERROR:
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          detailsLoaded: false,
          loading: false,
        };

      default:
        return state;
    }
  }
  