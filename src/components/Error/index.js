import React from "react";
import { Link } from "react-router-dom";

import { ErrorPage } from "../GlobalStyles/styles";
import ErrorIMG from "../../assets/404.png";

export default function Error() {
  return (
    <ErrorPage>
      <h1>404 - Vish, Não era pra ter acontecido isso!!!</h1>
      <img src={ErrorIMG} alt="" />
      <Link to="/feed">Clique aqui para voltar ao Feed, e não conte a ninguém que viu isso.</Link>
    </ErrorPage>
  );
}
