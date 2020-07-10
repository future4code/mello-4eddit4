import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, CardPost } from "../GlobalStyles/styles";
import axios from "axios";

import { useBlockAccess } from "../Hooks/useBlockAccess";

export default function FeedPage() {
  const history = useHistory();
  const [listPosts, setListPosts] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const token = window.localStorage.getItem("token");

  useBlockAccess();

  const handleClickLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  const goToPostPage = (idPost) => {
    history.push(`/post/${idPost}`);
  };

  useEffect(() => {
    getPostsFromData();
  }, []);

  const authorization = {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  };

  // ======================================================== PEGAR POSTS
  const getPostsFromData = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`,
        authorization
      )
      .then((response) => {
        setListPosts(response.data.posts);
        console.log(response.data.posts);
      });
  };
  // ======================================================== VOTES

  const putVotes = (postId, decision, userVoteDirection) => {
    let body = {};
    if (userVoteDirection === decision) {
      body = { direction: 0 };
    } else {
      body = { direction: decision };
    }

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`,
        body,
        authorization
      )
      .then((response) => {
        console.log(response.data);
        getPostsFromData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ======================================================== CREATE POST
  const bodyPost = {
    text: inputValue,
    title: "titulo",
  };

  const handlePost = (event) => {
    setInputValue(event.target.value);
  };

  const createPost = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`,
        bodyPost,
        authorization
      )
      .then((response) => {
        console.log(response.data);
        getPostsFromData();
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // =======================================================

  if (token) {
    return (
      <Container>
        <h1>FEED PAGE</h1>
        <h3>
          Você está logado como: {window.localStorage.getItem("username")}
        </h3>
        <button onClick={handleClickLogout}>Logout</button>
        <label>Crie seu post:</label>

        <input
          value={inputValue}
          onChange={handlePost}
          placeholder="Escreva seu post"
        />

        <button onClick={createPost}>Postar</button>

        {listPosts.map((post) => {
          return (
            <CardPost key={post.id}>
              <header>
                <p>{post.username}</p>
              </header>
              <div>
                <p>{post.text}</p>
              </div>

              <div>
                <button
                  onClick={() => putVotes(post.id, 1, post.userVoteDirection)}
                >
                  +
                </button>
                <span>{post.votesCount}</span>

                <button
                  onClick={() => putVotes(post.id, -1, post.userVoteDirection)}
                >
                  -
                </button>
                <span onClick={() => goToPostPage(post.id)}>
                  {post.commentsCount} - comentários
                </span>
              </div>
            </CardPost>
          );
        })}
      </Container>
    );
  } else {
    return <h1>ACESSO NEGADO</h1>;
  }
}
