import React from 'react';
import './Box.css';

function Box(props) {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );

  /*const styles = {
    backgroundColor:props.color,
    borderRadius:props.radius
  }

  return (
    <div className="box" style={styles}>
      {props.children}
    </div>
  );*/
}

export default Box;