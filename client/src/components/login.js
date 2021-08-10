import React, { Fragment, useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {appId} from "../config/idConfig";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

import { setAlert } from "../actions/alerts";
import { login } from "../actions/login";
import { Link, Redirect } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root:{
    "background-color": "#0042a8",
    "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%230042a8' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23144fb7' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23225dc7' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%232d6bd6' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%233879e5' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%234287f5' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
    "background-attachment": "fixed",
    "background-size": "cover",
    "min-height" :"100vh"
  },
  paper: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // "background-color": "white",
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#166efa",
  },
}));


const Login = (props) => {

  const classes = useStyles();
  const responseFacebook = async (response) => {
    console.log(response);
    const userId = response.id;
    const accessToken = response.accessToken;
    await props.login({ userId, accessToken});
  }
  if (sessionStorage.isLogin) {
    return <Redirect to="/home" />;
  }else{
    // return (
      
    // )
    return (
      <Box className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Box className={classes.box}>
          <Paper elevation={10} className={classes.paper2}>
          <FacebookLogin
            appId={appId}
            // autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends,email"
            callback={responseFacebook}
          />
          </Paper>
          </Box>
        </div>
      </Container>
      </Box>
    );
  }
};

const mapStateToProps = (state) => ({
  isLogin: state.login.isLogin,
  loading: state.login.loading,
});

export default connect(mapStateToProps, {setAlert, login})(Login);
