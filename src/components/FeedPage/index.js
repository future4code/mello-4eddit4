import React from "react";
import { Link } from "react-router-dom";
import { Container, CardPost } from "../GlobalStyles/styles";

export default function index() {
  return (
    <Container>
      <h1>FEED PAGE</h1>
      <label>Crie seu post:</label>
      <input placeholder="Escreva seu post" />
      <Link to="/">
        <button>Voltar para login</button>
      </Link>
      <CardPost>
        <Link to="/post">
          <p>Nome de usuário</p>
          <div>
            <p>Texto do post</p>
          </div>
        </Link>
        <div>
          <button>I</button>
          <span>Counter </span>
          <button>I</button>
          <span>comentários</span>
        </div>
      </CardPost>
    </Container>
  );
}
