import React from 'react';
import Box from './Box';

function App() {
  return (
    
    <div>
      <Box color="red" radius="50px" children='This box is red'></Box>
      <Box color="blue" radius="5px" children='This box is blue'></Box>
      <Box color="green" radius="30px" children='This box is green'></Box>
    </div>
  );
}

export default App;