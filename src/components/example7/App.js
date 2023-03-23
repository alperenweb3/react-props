import React from 'react';
import Button from './Button';

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  //const clicked = "Button is clicked";
  /*const clicked2 = () => {
    console.log('Button clicked!');
  };*/

  const dontClick = () => {
    console.log("I said Don't Click");
  };

  return (
    <div>
      <Button text="Click Me!" handleClick={handleButtonClick} />
      <br/>
      <br/>
      <Button  text="Don't Click me!!!" handleClick={dontClick}/>
    </div>
  );
}

export default App;