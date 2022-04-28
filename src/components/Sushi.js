import React,{useState} from "react";

function Sushi({sushi,onEat,remaining}) {
  const [eaten,setEaten]=useState(false)
  function handleEatClick(){
    if (remaining>sushi.price){
      setEaten(true)
      onEat(sushi)
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
