import React, { useEffect } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./components/login"
import Home from "./components/home"
import Alert from "./components/layout/alert";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/loadUser";
import Zoom from '@material-ui/core/Zoom';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <React.Fragment>
        <CssBaseline />
        <div className="App" >
          <Provider store={store}>
          <SnackbarProvider 
            maxSnack={3} 
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            TransitionComponent={Zoom}
          >
          <Router>
            <Alert />
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Router>
          </SnackbarProvider>
          </Provider>
        </div>
        </React.Fragment>
  );
}

export default App;
