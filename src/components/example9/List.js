import React from 'react';

function List(props) {
  const items = props.items.map((item) => (
    <li key={item.id}>{item.text}</li>
  ));

  return (
    <ul>
      {items}
    </ul>
  );
}

export default List;