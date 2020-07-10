import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, CardRegister } from "../GlobalStyles/styles";

import axios from "axios";

export default function RegisterPage() {
  const history = useHistory();
  const [body, setBody] = useState([
    {
      username: "",
      email: "",
      password: "",
    },
  ]);

  const handleSignInUser = (event) => {
    setBody({ ...body, username: event.target.value });
  };

  const handleSignInEmail = (event) => {
    setBody({ ...body, email: event.target.value });
  };

  const handleSignInPassWd = (event) => {
    setBody({ ...body, password: event.target.value });
  };

  console.log(body);

  const handleClickSignUp = () =>
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup`,
        body
      )
      .then((response) => {
        alert(`Usuário ${body.username} criado com sucesso`);

        history.push("/");
      })
      .catch((error) => {
        alert("User Ilegal");
        console.warn(error);
      });

  return (
    <Container>
      <h1>REGISTER PAGE</h1>
      <CardRegister>
        <input placeholder="NOME DE USUÁRIO" onChange={handleSignInUser} />
        <input placeholder="EMAIL" onChange={handleSignInEmail} />
        <input placeholder="SENHA" onChange={handleSignInPassWd} />
        <button onClick={handleClickSignUp}>CADASTRAR</button>
      </CardRegister>
    </Container>
  );
}
