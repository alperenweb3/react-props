import React from 'react';

function List(props) {
  const items = props.items.map((item) => <li key={item}>{item}</li>);

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default List;