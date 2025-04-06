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

const game = [{id: "G1",name: "The ONE",sequence: ""},
              {id: "G2",name: "The TWO",sequence: "G1"}, 
              {id: "G3",name: "The THREE",sequence: "G2"}];

const gameStages = [{gageId:"G1",id: "S1",name:"G1: First Stage",content:"<p>G1: First Stage</p>"},
                    {gageId:"G1",id: "S2",name:"G2: Second Stage",content:"<p>G2: Second Stage</p>"}, 
                    {gageId:"G1",id: "S3",name:"G3: Third Stage",content:"<p>G3: Third Stage</p>"},];


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
