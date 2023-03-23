import "./App.css";
//import Props from "./components/example1/App";
//import Props from "./components/example2/App";
//import Button from "./components/example3/Button";
//import Props from "./components/example4/App";
//import Props from "./components/example5/Router";
//import Role from "./components/example6/User";
import Props from "./components/example7/App";


/*const onClicked = () => {
  alert("Hello I am onClicked")
}*/

function App() {
  //const role="user";

  /*function promptNumber(){
    parseFloat(prompt("Please enter 0 or 1"));
  }

  const users = [
    { name: "Alperen", role: "admin" },
    { name: "Ahmet", role: "user" },
  ];*/

  return (
    <div className="App">
      <h1>React Props</h1>
      <Props />
      {/*<Button bgcolor="green" color="white" children="Buy Now" size="medium" onClick={onClicked} />*/}
      {/*<Role role={users[promptNumber()].role} username={users[promptNumber()].name} />*/}
    </div>
  );
}

export default App;
