import React from "react";

function Button(props) {
  const styles = {
    backgroundColor: props.bgcolor,
    fontSize:
      props.size === "large"
        ? "24px"
        : props.size === "medium"
        ? "18px"
        : "16px",
    padding:
      props.size === "large"
        ? "12px 24px"
        : props.size === "medium"
        ? "10px 18px"
        : "8px 16px",
    color: props.color,
  };

  console.log(props);

  return (
    <button style={styles} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
