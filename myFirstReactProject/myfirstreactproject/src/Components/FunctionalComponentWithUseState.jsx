import {useState} from "react";

export const CountComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count {count}</p>
      
      <button className="countButton" onClick={() => setCount(count + 1)}>    
        Increment
      </button>
    </div>
  );
}