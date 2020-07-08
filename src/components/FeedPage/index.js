import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, CardPost, LinkStyled } from "../GlobalStyles/styles";
import axios from 'axios';

import { useBlockAccess } from "../Hooks/useBlockAccess";

export default function FeedPage() {

    const [listPosts, setListPosts] = useState([]);


    useEffect(() => {
        getPostsFromData();
    }, [])
    
    const getPostsFromData = () => {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJZZUpUT2tCZk1Xb2VzN1NCOENGIiwidXNlcm5hbWUiOiJsZW9uYW0iLCJlbWFpbCI6ImRldi5sZW9uYW1AZ21haWwuY29tIiwiaWF0IjoxNTk0MTQxMDY3fQ.0IqfmasEoLYtT2W-D_dfogG91I0o6nQdEEgaNyrtpDg";
    
        const authorization = {
          headers: {
            Authorization: token
          }
        };
    
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`,
            authorization
          )
          .then(response => {
            setListPosts(response.data.posts);
            console.log(response.data.posts);
          });
      };

      const putVotesPost = (event, postId) => {
        
        const body = {  
            direction: Number(event.target.value)
        }

        const authorization = {
            headers: {
              Authorization: window.localStorage.getItem("token")
            }
        };


        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`,body, authorization)
            .then(response => {
                console.log(response.data)
            }).catch((err) => {
                console.log(err)
                console.log(postId)
                console.log(body)
            })

      }
      


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
                {listPosts.map(post => {
                    return (
                        <CardPost key={post.id}>
                            <header>
                                <p>{post.username}</p>
                            </header>
                            <div>
                                <p>{post.text}</p>
                            </div>
                            
                            <div>
                                <button value={1} onClick={(e) => putVotesPost(e, post.id)}>+</button>
                                <span>{post.votesCount}</span>
                                <button value={-1} onClick={(e) => putVotesPost(e, post.id)}>-</button>
                                <span>comentários</span>
                            </div>
                        </CardPost>
                    )
                })}
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
