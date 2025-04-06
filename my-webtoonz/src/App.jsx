import logo from './logo.svg';
import './App.css';
import { useState} from 'react'; 
import { getImageUrl } from './utils.js';

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

function GameList() {
  const gameList = game.map(item =>
    <li key={item.id}><img src={getImageUrl(item)} alt={item.name}/>{item.name} seq on:{item.sequence}  <button className="myButton">Play</button></li>
  );

  return (
    <div className="appContent"><ul>{gameList}</ul></div>
  );
}

function HomePage() {
  // user is logged in and sees the game list
  return (
    <GameList />
  );
}

function AppContent() {
  return(
    // return based on user-logged-Status
   <HomePage />
  );
}

function AppHeader({headerInfo}) {
  return (
        <div className="appHeader"> 
          <img src='MenuButton' alt='MB'/> 
          <b>{headerInfo}</b> 
          <img src='UserImgButton' alt='UiB'/>
        </div>
        );
}  


const game = [{id: "G1",name: "The G ONE",sequence: "",imageId:"MK3eW3A"},
              {id: "G2",name: "The G TWO",sequence: "G1",imageId:"mynHUSa"}, 
              {id: "G3",name: "The G THREE",sequence: "G2",imageId:"bE7W1ji"}];

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
        <AppHeader headerInfo={"GAME PORTAL"}/>
        <AppContent/>
    </div>
  );
}

export default App;
