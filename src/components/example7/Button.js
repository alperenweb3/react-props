import React from 'react';

//Blueprint = Yol Haritasi

function Button(props) {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

export default Button;