import React, { useState, useEffect } from 'react';

import './App.css'



const HelloWorld = () => {
  return (
    <p>Hello World!</p>
  )
};


function App() {
const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    console.log("app change", visibility)
  }, [visibility])

  return (
  <div>
    <button onClick={() => setVisibility(!visibility)}>Show / Hide</button>
    {visibility && <HelloWorld />}
  </div>
  )
}

export default App
