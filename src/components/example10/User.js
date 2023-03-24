import React from 'react';

function User(props) {
  
  const { name, age } = props.user;

  if (age >= 18) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{name} is not old enough</p>
      </div>
    );
  }
}

export default User;