import React, { useEffect } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/login"
import store from "./store";

function App() {
  return (
    <React.Fragment>
        <div className="App" >
          <Provider store={store}>
          <Router>
            <Route exact path="/" component={Login} />
          </Router>
          </Provider>
        </div>
        </React.Fragment>
  );
}

export default App;
