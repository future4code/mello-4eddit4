import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../GlobalStyles/styles";

export default function index() {
  return (
    <Container>
      <h1>REGISTER PAGE</h1>
      <input placeholder="Nome de usuário" />
      <input placeholder="Email" />
      <input placeholder="Senha" />
      <Link to="/">
        <button>Cadastrar</button>
      </Link>
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </Container>
  );
}
