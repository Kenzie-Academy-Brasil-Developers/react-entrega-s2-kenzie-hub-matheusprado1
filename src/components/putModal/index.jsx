import { Modal, StyledButton } from "./styles";

import Button from "../button";
import Input from "../input";

import api from "../../Services";

import { useState } from "react";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const PutModal = ({ setModalPut, itemToChange }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    api
      .put(`/users/techs/${itemToChange}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Tecnologia atualizada");
      })
      .catch((err) => toast.error("Ops!! Algo deu errado."));
  };

  return (
    <>
      <Modal>
        <div>
          <h4>Atualizar Tecnologia</h4>
          <StyledButton onClick={() => setModalPut(false)}> x </StyledButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="status"
            placeholder="Atualize seu progresso"
            label="Status"
          />
          <Button type="submit">Salvar Alterações</Button>
          <Button onClick={() => setModalPut(false)}>Voltar</Button>
        </form>
      </Modal>
    </>
  );
};

export default PutModal;
