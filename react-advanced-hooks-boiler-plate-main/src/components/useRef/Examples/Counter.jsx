import { useState, useEffect, useRef } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef();
  
  const handleIncrement = () => 
    setCount(count + 1);

  useEffect(() => {
    previousCountRef.current = count
  }, [count])

  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCountRef.current}</p>
    </>
  )
}
