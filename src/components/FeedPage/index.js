import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, CardPost } from "../GlobalStyles/styles";

import { useBlockAccess } from "../Hooks/useBlockAccess";

export default function FeedPage() {
    const history = useHistory();
    const handleClickLogout = () => {
        window.localStorage.clear();
        history.push("/");
    };

    useBlockAccess();
    if ("token") {
        return (
            <Container>
                <h1>FEED PAGE</h1>
                <h3>
                    Você está logado como:{" "}
                    {window.localStorage.getItem("username")}
                </h3>
                <label>Crie seu post:</label>
                <button onClick={handleClickLogout}>Logout</button>
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
    } else {
        return (
            <div>
                <p>Error</p>
            </div>
        );
        //<Link to="/error" />;
    }
}
