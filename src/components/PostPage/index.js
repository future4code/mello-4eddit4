import React from "react";
import { Link } from "react-router-dom";
import { Container, CardPost, CardComents } from "../GlobalStyles/styles";

export default function index() {
  return (
    <Container>
      <h1>POSTS PAGE</h1>
      <Link to="/feed">
        <button>Voltar ao feed</button>
      </Link>
      <CardPost>
        <p>Nome de usuário</p>
        <div>
          <p>Texto do post</p>
        </div>
        <div>
          <button>I</button>
          <span>Counter </span>
          <button>I</button>
          <span>comentários</span>
        </div>
      </CardPost>
      <div>
        <label>Escreva seu comentário</label>
        <input placeholder="Escreva seu comentário" />
        <h3>TODOS COMENTÁRIOS</h3>
      </div>
      <CardComents>
        <p>Nome de usuário</p>
        <div>
          <p>Texto do comentário</p>
        </div>
        <div>
          <button>I</button>
          <span>Counter </span>
          <button>I</button>
        </div>
      </CardComents>
    </Container>
  );
}
