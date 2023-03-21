import React from 'react';
import ListItem from './ListItem';

function List(props) {
  const items = props.items.map((item) => (
    <ListItem key={item.name} name={item.name} description={item.description} />
  ));

  return <ul>{items}</ul>;
}

export default List;