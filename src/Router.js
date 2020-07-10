import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import FeedPage from "./components/FeedPage";
import PostPage from "./components/PostPage";
import Error from "./components/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/post/:postId">
          <PostPage />
        </Route>
        <Route path="">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
