import { useState } from "react"


export const CountButton = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
  const newCount = setCount(count + 1);
  return newCount
};

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={handleCount}>click to increase count!</button>
    </div>
  )
}