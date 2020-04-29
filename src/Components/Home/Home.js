import React from 'react';
import {AuthConsumer} from "../Auth/authContext";
import {Redirect} from "react-router-dom";
import Login from "../Auth/Login";
import PostsList from "../Post/Posts";

const HomePage = () => (
    <AuthConsumer>
      {({ authenticated }) =>
          authenticated ? (
              <Redirect to="/dashboard" />
          ) : (
              <div>
                <h2>Welcome to React RBAC Tutorial.</h2>
                <Login />
                <PostsList />
              </div>
          )
      }
    </AuthConsumer>
);

export default HomePage;
