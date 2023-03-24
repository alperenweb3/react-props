import React from 'react';
import List from './List';

function App() {
  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
  ];

  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;