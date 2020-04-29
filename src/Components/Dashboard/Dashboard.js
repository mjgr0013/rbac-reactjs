import React from 'react';
import { AuthConsumer } from "../Auth/authContext";
import Can from "../Auth/Can";
import Logout from "../Auth/Logout";
import PostsList from "../Post/Posts";
import { Redirect } from "react-router-dom";
import Profile from "../Profile/Profile";

const DashboardPage = () => (
    <AuthConsumer>
      {({ user }) => (
          <Can
              role={user.role}
              perform="dashboard-page:visit"
              yes={() => (
                  <div>
                    <h1>Dashboard</h1>
                    <Logout />
                    <Profile />
                    <PostsList />
                  </div>
              )}
              no={() => <Redirect to="/" />}
          />
      )}
    </AuthConsumer>
);

export default DashboardPage;
