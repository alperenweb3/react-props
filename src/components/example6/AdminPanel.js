import React from 'react';

function AdminPanel(props) {
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome {props.username}, Your role is admin! You have access to sensitive data.</p>
    </div>
  );
}

export default AdminPanel;