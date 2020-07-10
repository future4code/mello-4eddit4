import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, CardPost, CardInput, Footer } from "../GlobalStyles/styles";
import axios from "axios";

import { useBlockAccess } from "../Hooks/useBlockAccess";

export default function FeedPage() {
  const history = useHistory();
  const [listPosts, setListPosts] = useState([]);

  const [vote, setVote] = useState({});

  useBlockAccess();

  const handleClickLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    getPostsFromData();
  }, []);

  // ======================================================== PEGAR POSTS
  const getPostsFromData = () => {
    const authorization = {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    };

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

  const putVotesUp = (postId, userVoteDirection, votes) => {
    setVote(votes);

    let body = {};
    if (userVoteDirection !== 0) {
      body = { direction: 0 };

      //   const postIndex = listPosts.findIndex((post) => post.id === postId);
      //   // resposta do findIndex é -1 quando nao encontrou e 0 quando encontrou
      //   if (userVoteDirection === -1) {
      //     if (postIndex !== -1) {
      //       listPosts[postIndex].votesCount += 1;
      //       setListPosts([...listPosts]);
      //     } else {
      //       listPosts[postIndex].votesCount -= 1;
      //       setListPosts([...listPosts]);
      //     }
      //   }
    } else {
      body = { direction: +1 };
      //   const postIndex = listPosts.findIndex((post) => post.id === postId);
      //   // resposta do findIndex é -1 quando nao encontrou e 0 quando encontrou
      //   if (postIndex !== -1) {
      //     listPosts[postIndex].votesCount += 1;
      //     setListPosts([...listPosts]);
      //   }
    }

    const authorization = {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`,
        body,
        authorization
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // =======================================================
  const putVotesDown = (postId, userVoteDirection, votes) => {
    let body = {};

    if (userVoteDirection !== 0) {
      body = { direction: 0 };
    } else {
      body = { direction: -1 };
    }

    const authorization = {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`,
        body,
        authorization
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if ("token") {
    return (
      <Container>
        <h1>FEED PAGE</h1>
        <h3>
          Você está logado como: {window.localStorage.getItem("username")}
        </h3>
        <button onClick={handleClickLogout}>Logout</button>
        <CardInput>
          <input placeholder="Escreva seu post" />
          <button>Postar</button>
        </CardInput>
        {listPosts.map((post) => {
          return (
            <CardPost key={post.id}>
              <header>
                <p>{post.username}</p>
              </header>
              <section>
                <p>{post.text}</p>
              </section>

              <Footer>
                <span>
                  <button
                    onClick={() =>
                      putVotesUp(
                        post.id,
                        post.userVoteDirection,
                        post.votesCount
                      )
                    }
                  >
                    +
                  </button>
                  <span>{post.votesCount}</span>

                  <button
                    onClick={() =>
                      putVotesDown(
                        post.id,
                        post.userVoteDirection,
                        post.votesCount
                      )
                    }
                  >
                    -
                  </button>
                </span>
                <span>comentários</span>
              </Footer>
            </CardPost>
          );
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
