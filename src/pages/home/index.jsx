import { Redirect, useHistory } from "react-router-dom";

import { motion } from "framer-motion";

import styledHome from "./styles";
import Button from "../../components/button";

import logo from "../../assets/logo.png";

const Home = ({ auth }) => {
  const history = useHistory();

  function login() {
    history.push("/login");
  }

  function register() {
    history.push("/register");
  }

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <styledHome>
        <img src={logo} alt="kenzie-hub" />
        <h1>Seja Bem Vindo!</h1>
        <div>
          <Button onClick={login}>Entre</Button>
          <Button onClick={register} register>
            Cadastre-se
          </Button>
        </div>
      </styledHome>
    </motion.div>
  );
};

export default Home;
