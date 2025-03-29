import logo from './logo.svg';
import './App.css';


function HandleButtonClick() {
  alert("Tlačítko bylo stisknuto!");
}


function MyButton() {
  return (
    <button className="myButton" onClick={HandleButtonClick}>
      <img src={logo} className="App-logo" alt="logo" />
      <br/>Moje tlačítko  
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        FireBAse Course
        My first {MyButton()} WebToons running on Firebase
      </header>
    </div>
  );
}

export default App;
