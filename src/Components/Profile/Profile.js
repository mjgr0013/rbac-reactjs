import React from "react";
import {AuthConsumer} from "../Auth/authContext";

const Profile = () => {
  return(
      <AuthConsumer>
        {({user}) => (
            <div>
              <h2>User Profile</h2>
              <ul>
                <li>ID: {user.id}</li>
                <li>Email: {user.email}</li>
                <li>Role: {user.role}</li>
              </ul>
            </div>
        )}
      </AuthConsumer>
  )
}

export default Profile
