import { Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home auth={auth} />
        </Route>
        <Route path="/register">
          <Register auth={auth} />
        </Route>
        <Route path="/login">
          <Login auth={auth} setAuth={setAuth} />
        </Route>
        <Route path="/dashboard">
          <Dashboard auth={auth} setAuth={setAuth} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
