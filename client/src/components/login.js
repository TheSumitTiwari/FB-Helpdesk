import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import {appId} from "../config/idConfig";

import FacebookLogin from 'react-facebook-login';
import store from "../store";

const Login = (props) => {

  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <FacebookLogin
      appId={appId}
      autoLoad={true}
      fields="name,email,picture"
      scope="public_profile,user_friends"
      callback={responseFacebook}
    />
  )

};

const mapStateToProps = (state) => ({

});

export default connect()(Login);
