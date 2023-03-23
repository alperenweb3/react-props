import React from 'react';

function UserProfile(props) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome {props.username}! Your profile information is displayed here.</p>
    </div>
  );
}

export default UserProfile;
