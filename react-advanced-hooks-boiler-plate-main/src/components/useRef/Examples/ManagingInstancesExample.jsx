import { useRef, useEffect, useState } from "react";
export const ManagingInstancesExample = () => {
  // Content
  const content = {
    heading:
      "In this ManagingInstancesExamples component, each example demonstrates a different use case of useRef to manage instances and persist values across renders without causing re-renders.",
  };

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef();

  

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

      return () => clearInterval(intervalRef.current);
  },[isRunning])

  const handleTimerBoolean = () => {
    setIsRunning(!isRunning)
  }
 
  return (
    <>
      {content}
      <h2>Timer: {time} seconds</h2>
      <button
        onClick={handleTimerBoolean}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </>
  );
};
