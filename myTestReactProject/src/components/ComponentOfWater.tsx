import { useState } from "react"


export const WaterState = () => {

  const [state, setState] = useState("Water");

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={() => setState("Frozen")}>Freeze</button>
      <button onClick={() => setState("Liquid")}>Flow</button>
      <button onClick={() => setState("Gaseous")}>Fly</button>
    </div>
  )
}