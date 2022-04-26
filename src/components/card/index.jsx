import { toast } from "react-toastify";

import { Container, StyledButton } from "./styles";

import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

import api from "../../Services/";

const Card = ({ status, title, id, setItemToChange, setModalPut }) => {
  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const deleteItem = (buttonId) => {
    api
      .delete(`/users/techs/${buttonId}`, {
        headers: { Authorization: `Bearer ${token}` },
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
        {status} <AiFillEdit/>
      </p>
      <StyledButton onClick={(event) => deleteItem(event.target.id)} id={id}>
        <MdDeleteForever />
      </StyledButton>
    </Container>
  );
};

export default Card;
