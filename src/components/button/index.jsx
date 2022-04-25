import styledButton from "./styles";

const Button = ({ children, register, onClick }) => {
  return (
    <>
     <styledButton onClick={onClick} register={register}>
         {children}
     </styledButton>
    </>
  );
};

export default Button;
