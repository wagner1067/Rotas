
import React from "react";
import styled from "styled-components";
import axios from "axios";



const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({users,setUsers,getUsers}) => {  
  const saveData = async (e) => {
    const corpo = {
      "id": users.length + 1,
      "nome": e.target.elements.nome.value,
      "email": e.target.elements.email.value,
      "telefone": e.target.elements.telefone.value
    }
    if( e.target.elements.nome.value !== "" && e.target.elements.email.value !== "" && e.target.elements.telefone.value !== "") {
      await axios.post('http://localhost:5000/cliente', corpo)
    }else{
      alert('Não é permitido enviar o formulario vazio!')
    }
    
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={saveData}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" type="number" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
