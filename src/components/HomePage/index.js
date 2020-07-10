import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, CardLogin, LinkStyled } from "../GlobalStyles/styles";

import axios from "axios";

export default function HomePage() {
  const history = useHistory();
  const [body, setBody] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const handleClickLogin = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`,
        body
      )
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("username", response.data.user.username);

        history.replace("/feed");
      })
      .catch((error) => {
        console.log(error);
        alert("Deu ruim");
      });
  };

  const handleChangeEmail = (event) => {
    setBody({ ...body, email: event.target.value });
  };

  const handleChangePassWd = (event) => {
    setBody({ ...body, password: event.target.value });
  };

  return (
    <Container>
      <h1>LOGIN PAGE</h1>
      <CardLogin>
        <input placeholder="EMAIL" onChange={handleChangeEmail} />
        <input
          type="password"
          placeholder="SENHA"
          onChange={handleChangePassWd}
        />
        <button onClick={handleClickLogin}>ENTRAR</button>
        <div>
          <LinkStyled to="/register">
            <span>Novo no LabEddit? </span>
            <button>Cadastrar</button>
          </LinkStyled>
        </div>
      </CardLogin>
    </Container>
  );
}
