import React from "react";
import { connect } from "react-redux";
import { useSnackbar } from 'notistack';

const Alert = ({alert}) => {

  const { enqueueSnackbar } = useSnackbar();

  const MyApp = (alert) => {
     if(alert.msg!=""){
      enqueueSnackbar(alert.msg, {variant : alert.alertType},)
     }
      return <div></div>
  }

  if(alert !== null ){
    return(            
        MyApp(alert)
    )
  }
  return <div></div>;
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
