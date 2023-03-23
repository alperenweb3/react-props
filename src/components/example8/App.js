import React from 'react';
import Box from './Box';

function App() {
  return (
    <div>
      <Box color="red" children='This box is red'></Box>
      <Box color="blue" children='This box is blue'></Box>
      <Box color="green" children='This box is green'></Box>
    </div>
  );
}

export default App;