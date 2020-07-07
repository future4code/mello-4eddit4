import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "../GlobalStyles/styles";

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
            <input placeholder="Nome de usuário" onChange={handleSignInUser} />
            <input placeholder="Email" onChange={handleSignInEmail} />
            <input placeholder="Senha" onChange={handleSignInPassWd} />
            <button onClick={handleClickSignUp}>Cadastrar</button>

            <Link to="/">
                <button>Voltar</button>
            </Link>
        </Container>
    );
}
