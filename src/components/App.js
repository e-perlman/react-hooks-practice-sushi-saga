import React,{useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {
  const [eatenSushi,setEatenSushi]=useState([])
  
  function handleEatenSushi(sushiEat){
    setEatenSushi([...eatenSushi,sushiEat])
  }
  const prices=eatenSushi.map(plate=>plate.price)
  const remaining=100-prices.reduce((total,price)=>total+price,0)
  return (
    <div className="app">
      <SushiContainer onEat={handleEatenSushi} remaining={remaining}/>
      <Table plates={eatenSushi} remaining={remaining}/>
    </div>
  );
}

export default App;
