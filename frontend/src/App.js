import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./components/navbar";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try{
      const resposta = await axios.get('http://localhost:5000/cliente')
      setUsers(resposta.data);
    }catch(e){
      alert(e)
    }   
  };

  useEffect(() => {getUsers();}, [setUsers]);

  return (
    <>

      <Container>
        <Title>Clientes</Title>
        <Form users={users} getUsers={getUsers}/>
        <Grid users={users}/>
      </Container>
      <ToastContainer autoClose={5000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
