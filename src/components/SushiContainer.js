import React,{useState,useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({onEat,remaining}) {
  const API = "http://localhost:3001/sushis";
  
  const [sushis,setSushis]=useState([])
  const [shown,setShown]=useState(0)
  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then(sushis=>setSushis(sushis))
  },[])
  const shownSushi= sushis.filter((sushi)=>sushi.id>shown && sushi.id<=shown+4
  )
  function handleMoreSushi(){
    setShown(shown+4)
  }
  
  return (
    <div className="belt">
      {shownSushi.map(sushi=>(
        <Sushi key={sushi.id} sushi={sushi} onEat={onEat} remaining={remaining}/>
      ))}
      <MoreButton moreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
