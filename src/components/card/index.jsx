import { toast } from "react-toastify";

import { Container, styledButton } from "./styles";

import api from "../../services/api";

const Card = ({ status, title, id, setItemToChange, setModalPut }) => {
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const deleteItem = (buttonId) => {
    api
      .delete(`/users/techs/${buttonId}`, {
        headers: { Authorization: `Bearer${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia deletada").catch((err) => console.log(err));
      });
  };

  const showModal = (event) => {
    setItemToChange(event.target.id);
    setModalPut(true);
  };

  return (
    <Container>
      <h3>{title}</h3>
      <p id={id} onClick={showModal}>
        {status}
      </p>
      <styledButton onClick={(event) => deleteItem(event.target.id)} id={id}>
        X
      </styledButton>
    </Container>
  );
};

export default Card;
