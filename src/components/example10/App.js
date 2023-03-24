import React from 'react';
import User from './User';

function App() {
  const user1 = { name: 'Alice', age: 25 };
  const user2 = { name: 'Bob', age: 15 };
  const user3 = { name: 'Alperen', age: 37 };
  const user4 = { name: 'Ahmet', age: 17 };

  return (
    <div>
      <User user={user1} />
      <User user={user2} />
      <User user={user3} />
      <User user={user4} />
    </div>
  );
}

export default App;