import { combineReducers } from "redux";
import alert from "./alert";
import login from "./login";
import loadUser from "./loadUser";


import loader from "./loader";

export default combineReducers({
    alert,
    loadUser,
    login,
    loader,
  });