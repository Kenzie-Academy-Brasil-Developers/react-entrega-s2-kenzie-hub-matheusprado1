import { Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  return(
      <AnimatePresence>
          <Switch>
              <Route exact path="/">

              </Route>
              <Route path="/register">

              </Route>
              <Route path ="/login">

              </Route>
              <Route path="/dashboard">

              </Route>
          </Switch>
      </AnimatePresence>
  )
};

export default Routes;