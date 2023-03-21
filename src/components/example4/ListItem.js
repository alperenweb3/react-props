import React from 'react';

function ListItem(props) {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </li>
  );
}

export default ListItem;