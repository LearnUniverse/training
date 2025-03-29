import logo from './logo.svg';
import './App.css';
import { useState} from 'react'; 

function MyButton({count, onClickMe}) {
  return (
    <button className="myButton" onClick={onClickMe}>
      <img src={logo} className="App-logo" alt="logo" />
      <br/>Moje tlačítko bylo stisknuto {count} krát!  
    </button>
  );
}

const optionsList = [
  {name: 'Option 1', id:1},
  {name: 'Option 2', id:2}, 
  {name: 'Option 3', id:3}
];

const listItems = optionsList.map(item =>
  <li key={item.id}>{item.name}</li>
);

function MyList() {
  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function HandleButtonClick() {
    setCount(count + 1);
    alert("Tlačítko bylo stisknuto!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        FireBAse Course
        My first <MyButton count={count} onClickMe = {HandleButtonClick}/>  and second 
        <MyButton count={count} onClickMe = {HandleButtonClick}/> WebToons running on Firebase
        <MyList />
      </header>
    </div>
  );
}

export default App;
