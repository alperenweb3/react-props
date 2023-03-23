import React from 'react';
import './Box.css';

function Box(props) {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
}

export default Box;