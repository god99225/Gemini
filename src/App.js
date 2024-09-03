// App.js
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login/Login";
import { Context } from "./context/context";

const App = () => {
  const { authenticated } = useContext(Context);

  return (
    <Router>
      <Route exact path="/">
        {authenticated ? <Redirect to="/main" /> : <Login />}
      </Route>
      <Route path="/main">
        {authenticated ? <Main /> : <Redirect to="/" />}
      </Route>
    </Router>
  );
};

export default App;
