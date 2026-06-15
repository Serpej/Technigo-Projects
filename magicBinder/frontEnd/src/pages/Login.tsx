import { useState } from "react";
import { handleValue } from "../helperFunctions/handleValue";
import { onLoginSubmit } from "../helperFunctions/onLoginSubmit";



export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return(
    <div
      className="grid grid-cols-[1fr_2fr_1fr] bg-baltic-blue  pl-4 py-1 border-t border-dark-walnut"
    >
      <div></div>
      <section
        className="col-start-2 flex justify-center"
      >
        <form
          onSubmit={(e) => onLoginSubmit(e, email, password)}
        >
          <label htmlFor="email"
            className="text-papyrus-white"
          >
            Email:
            <input 
              className="bg-papyrus-white rounded-sm m-2 border border-dark-walnut"
              type="email" 
              name="Email"
              id="email"
              onChange = {(e) => handleValue(e, setEmail)} 
              value={email}
              required
            />
          </label>
          <label htmlFor="password"
            className="text-papyrus-white"
          >
            Password:
            <input 
              className="bg-papyrus-white rounded-sm m-2 border border-dark-walnut"
              type="password" 
              name="Password"
              id="password"
              onChange = {(e) => handleValue(e, setPassword)}
              value={password}
              required
            />
          </label>
          <button
            className="bg-papyrus-beige border border-dark-walnut px-1 py-0.5 m-1 rounded-sm cursor-pointer transition delay-100 hover:scale-105"
            type="submit"  
          >
            Login
          </button>
        </form>
      </section>
      <div></div>
    </div>
  )
}
