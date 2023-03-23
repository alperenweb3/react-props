import React from 'react';
import User from './User';

function App() {
  const user1 = { name: 'Alice', age: 25 };
  const user2 = { name: 'Bob', age: 15 };

  return (
    <div>
      <User user={user1} />
      <User user={user2} />
    </div>
  );
}

export default App;