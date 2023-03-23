import React from 'react';

function Child(props) {
  return (
    <div>
      <h1>Hello, My name is {props.name}! I am {props.age} years old</h1>
    </div>
  );
}

export default Child;