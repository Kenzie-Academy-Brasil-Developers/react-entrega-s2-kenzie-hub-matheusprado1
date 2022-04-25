import { styledHeader, styledButton } from "./styles";

import logo from "../../assets/logo.png";

import { useHistory } from "react-router-dom";

const Header = ({setAuth}) => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/");
  };

  return (
      <>
      <styledHeader>
          <div>
              <img src={logo} alt="kenzie-hub"/>
              <styledButton onClick={logout}>
                  Sair
              </styledButton>
          </div>
      </styledHeader>
      </>
  )
};
