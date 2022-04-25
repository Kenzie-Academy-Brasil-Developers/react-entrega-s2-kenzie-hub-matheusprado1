import { Container, styledInput } from "./styles";

const Input = ({label, placeholder, type, register, name})=> {
    return (
        <Container>
            <label>{label}</label>
            <styledInput type={type} placeholder={placeholder} {...register(name)}/>
        </Container>
    );
};

export default Input;