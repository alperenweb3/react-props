import './App.css';
//import Props from "./components/example1/App";
//import Props from "./components/example2/App";
//import Button from "./components/example3/Button";
import Props from "./components/example4/App";
//import Props from "./components/example4/App";
//import Props from "./components/example5/Router";

/*const onClicked = () => {
  alert("Hello I am onClicked")
}*/


function App() {
  return (
    <div className="App">
      <h1>React Props</h1>
      {/*<Button bgcolor="green" color="white" children="Buy Now" size="medium" onClick={onClicked} />*/}
      <Props />
    </div>
  );
}

export default App;
