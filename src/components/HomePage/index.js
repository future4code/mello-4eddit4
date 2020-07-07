import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../GlobalStyles/styles";

export default function index() {
  return (
    <Container>
      <h1>HOME PAGE</h1>
      <input placeholder="Email" />
      <input placeholder="Senha" />
      <Link to="/feed">
        <button>Entrar</button>
      </Link>
      <Link to="/register">
        <button>Cadastrar</button>
      </Link>
    </Container>
  );
}
