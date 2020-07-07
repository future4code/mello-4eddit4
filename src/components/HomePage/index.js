import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "../GlobalStyles/styles";

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
                window.localStorage.setItem(
                    "username",
                    response.data.user.username
                );

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
            <h1>HOME PAGE</h1>
            <input placeholder="Email" onChange={handleChangeEmail} />
            <input placeholder="Senha" onChange={handleChangePassWd} />
            <button onClick={handleClickLogin}>Entrar</button>
            <Link to="/register">
                <button>Cadastrar</button>
            </Link>
        </Container>
    );
}
