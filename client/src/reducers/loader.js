import {
    SHOW_LOADER,
    HIDE_LOADER,
  } from "../actions/types";

const initialState = {
  loading: false, //false
};

export default function (state = initialState, action) {
    const { type } = action;
  
    switch (type) {
        
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
  
      default:
        return state;
    }
  }
  

  