import React from "react";

import "./css/App.css";
import Main from "./pages";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
