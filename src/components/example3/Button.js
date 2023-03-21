import React from 'react';

function Button(props) {
  const styles = {
    backgroundColor: props.bgcolor,
    fontSize: props.size === 'large' ? '24px' : '16px',
    padding: props.size === 'large' ? '12px 24px' : '8px 16px',
    color: props.color
  };

  return (
    <button style={styles} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;