import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import {appId} from "../config/idConfig";

import { setAlert } from "../actions/alerts";
import { login } from "../actions/login";
import { Link, Redirect } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';


const Login = (props) => {

  const responseFacebook = async (response) => {
    console.log(response);
    const userId = response.id;
    const accessToken = response.accessToken;
    await props.login({ userId, accessToken});
  }
  if (sessionStorage.isLogin) {
    return <Redirect to="/home" />;
  }else{
    return (
      <FacebookLogin
        appId={appId}
        // autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,email"
        callback={responseFacebook}
      />
    )
  }
};

const mapStateToProps = (state) => ({
  isLogin: state.login.isLogin,
  loading: state.login.loading,
});

export default connect(mapStateToProps, {setAlert, login})(Login);
