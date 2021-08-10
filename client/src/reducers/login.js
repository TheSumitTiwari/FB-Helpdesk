import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SHOW_LOADER,
    HIDE_LOADER,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    RESET_LOGOUT_USER,
  } from "../actions/types";
  
  const initialState = {
    isLogin: false,
    loading: false, //false
    detailsLoaded: null,
    message: null,
    token: localStorage.getItem("token"),
    user: null,
    isloggedOut: false,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:

        return {
          ...state,
          isLogin: true,
          detailsLoaded:true,
          loading: false,
          user: payload,
        };
  
      case LOGIN_SUCCESS:
        localStorage.setItem("token", payload.token);
        sessionStorage.setItem("isLogin", true);
        return {
          ...state,
          ...payload,
          isLogin: true,
          // loading: false,
        };
  
      case LOGIN_FAIL:
        return {
          ...state,
          isLogin: false,
          // loading: false,
        };
  
      case SHOW_LOADER:
        return {
          ...state,
          loading: true,
        };
  
      case HIDE_LOADER:
        return {
          ...state,
          loading: false,
        };
  
      case AUTH_ERROR:
        localStorage.removeItem("token");
        sessionStorage.removeItem("isLogin");
        return {
          ...state,
          token: null,
          isLogin: false,
          detailsLoaded:false,
          // loading: false,
        };

        case LOGOUT_USER_SUCCESS:
        localStorage.removeItem("token");
        sessionStorage.removeItem("isLogin");
        return {
          ...state,
          isLogin: false,
          detailsLoaded:false,
          user: null,
          isloggedOut: true,
          token:null
        };
  
      case LOGOUT_USER_FAIL:
        return {
          ...state,
          isloggedOut: false,
        };
        
      case RESET_LOGOUT_USER:
        return {
          ...state,
          isLoggedOut: false,
        };
  
      default:
        return state;
    }
  }
  