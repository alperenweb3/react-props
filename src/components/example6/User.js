import React from "react";
import AdminPanel from "./AdminPanel";
import UserProfile from "./UserProfile";

function User(props) {
  return (
    <div>
      {props.role === "admin" ? (
        <AdminPanel username={props.username} />
      ) : (
        <UserProfile username={props.username} />
      )}
    </div>
  );
}

export default User;
