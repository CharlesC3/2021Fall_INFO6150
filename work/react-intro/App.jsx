import { useState } from "react";
import Reorder from './Reorder';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  const fade = count === 0? "fade-in":"fade-out";  
  return (
    <div className={`app ${fade}`}>
      <p>The inventory count is {count}</p>
      <div className="buttons">
        <button onClick = {()=> setCount(count += 1)}>+</button>
        <button onClick ={()=> {setCount(count -= 1)}} disabled={!count}>-</button>
        <Reorder onReorder={setCount}/>
      </div>
    </div>
  );
}

export default App;




