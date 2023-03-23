import React from 'react';
import List from './List';

function App() {
  const items = [
    { name: 'Item 1', description: 'This is item 1' },
    { name: 'Item 2', description: 'This is item 2' },
    { name: 'Item 3', description: 'This is item 3' },
  ];

  return (
    <div>
      <List items={items}/>
    </div>
  );
}

export default App;