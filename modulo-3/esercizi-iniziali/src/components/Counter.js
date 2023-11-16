import "../App.css";
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(false)
  
  useEffect(() => {
    if(count === 10 || count === 0){
      setDirection(!direction)

       
    }
  }, [count])
 
  function change() {
  
    if(direction){
      setCount(count + 1)
    }else{
      setCount(count - 1)
    }
   
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={change}>click</button>
      </header>
    </div>
  );
}


