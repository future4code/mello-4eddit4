import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, CardPost, CardComents } from "../GlobalStyles/styles";
import { useBlockAccess } from "../Hooks/useBlockAccess";
import axios from "axios";

export default function PostPage() {
  const [comments, setComments] = useState([]);
  const [details, setDetails] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const token = window.localStorage.getItem("token");
  const pathParams = useParams();
  useBlockAccess();

  const authorization = {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getDetails();
  }, []);

  // ======================================================== POST DETAILS
  const getDetails = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.postId}`,
        authorization
      )
      .then((response) => {
        setDetails([response.data.post]);
        setComments(response.data.post.comments);
      });
  };

  // ======================================================== VOTE POST
  const votePost = (idComment, decision, userVoteDirection) => {
    let body = {};
    if (userVoteDirection === decision) {
      body = { direction: 0 };
    } else {
      body = { direction: decision };
    }

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${idComment}/vote`,
        body,
        authorization
      )
      .then((response) => {
        console.log(response.data);
        getDetails();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ======================================================== VOTE COMMENT
  const voteComment = (idVoteComment, decision, userVoteDirection) => {
    let body = {};
    if (userVoteDirection === decision) {
      body = { direction: 0 };
    } else {
      body = { direction: decision };
    }

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.postId}/comment/${idVoteComment}/vote`,
        body,
        authorization
      )
      .then((response) => {
        console.log(response.data);
        getDetails();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ======================================================== CREATE COMMENT

  const handleComment = (event) => {
    setInputValue(event.target.value);
  };

  const createComment = () => {
    const body = {
      text: inputValue,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.postId}/comment`,
        body,
        authorization
      )
      .then((response) => {
        console.log(response.data);
        setInputValue("");
        getDetails();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ========================================================

  if (token) {
    return (
      <Container>
        <h1>POSTS PAGE</h1>
        <Link to="/feed">
          <button>Voltar ao feed</button>
        </Link>
        {details.map((post) => {
          return (
            <CardPost>
              <p>{post.username}</p>
              <div>
                <p>{post.text}</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    votePost(post.id, 1, post.userVoteDirection);
                  }}
                >
                  +
                </button>
                <span>{post.votesCount}</span>
                <button
                  onClick={() => {
                    votePost(post.id, -1, post.userVoteDirection);
                  }}
                >
                  -
                </button>
                <span>{post.commentsCount} - Comentários</span>
              </div>
            </CardPost>
          );
        })}

        <div>
          <label>Escreva seu comentário</label>
          <input
            value={inputValue}
            onChange={handleComment}
            placeholder="Escreva seu comentário"
          />
          <button onClick={createComment}>Comentar</button>
          <h3>TODOS COMENTÁRIOS</h3>
        </div>
        {comments.map((comment) => {
          return (
            <CardComents>
              <p>{comment.username}</p>
              <div>
                <p>{comment.text}</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    voteComment(comment.id, 1, comment.userVoteDirection);
                  }}
                >
                  +
                </button>
                <span>{comment.votesCount}</span>
                <button
                  onClick={() => {
                    voteComment(comment.id, -1, comment.userVoteDirection);
                  }}
                >
                  -
                </button>
              </div>
            </CardComents>
          );
        })}
      </Container>
    );
  } else {
    return <h1>ACESSO NEGADO</h1>;
  }
}
