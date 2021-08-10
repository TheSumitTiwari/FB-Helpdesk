import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import store from "../store";
import { logoutUser } from "../actions/logout";
import { Link, Redirect } from "react-router-dom";
import Loader from "../components/layout/loader";

const Home = (props) => {

    // useEffect(() => {
    //     store.dispatch(todoLoad());
    //   }, []);

    const LogoutUser = async () => {
        await store.dispatch(logoutUser());
    };
    
    if (!sessionStorage.isLogin) {
        return <Redirect to="/" />;
    } 
    
    if (!props.detailsLoaded ) {
        return <Loader />;
    } 
    
    else {
        return (
          <Fragment>
              <Button variant="contained" onClick={() => LogoutUser()}>
                <strong>Logout</strong>
              </Button>
          </Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    loading: state.login.loading,
    isLogin: state.login.isLogin,
    detailsLoaded: state.login.detailsLoaded,
});

export default connect(mapStateToProps)(Home);
