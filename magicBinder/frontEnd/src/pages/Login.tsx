import { useState } from "react";
import { handleValue } from "../helperFunctions/handleValue";
import { onLoginSubmit } from "../helperFunctions/onLoginSubmit";

interface LoginProps {
  className: string
}

export const Login = ( {className}:LoginProps ) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return(
    <div
      className={`${className} grid grid-cols-[1fr_2fr_1fr]`}
    >
      <div></div>
      <section
        className="col-start-2 flex justify-center items-center"
      >
        <form
          onSubmit={(e) => onLoginSubmit(e, email, password)}
          className="flex max-w-md w-full flex-col bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-1 border-2 rounded-sm border-toffee-brown"
        >
          <label htmlFor="email"
            className="flex flex-col text-papyrus-white"
          >
            <p 
              className="m-1 mb-0"
            >
              Email:
            </p>
            <input 
              className="flex-1 text-pitch-black bg-sky-soap m-1 rounded-sm border border-dark-walnut"
              type="email" 
              name="Email"
              id="email"
              onChange = {(e) => handleValue(e, setEmail)} 
              value={email}
              required
            />
          </label>
          <label htmlFor="password"
            className="flex flex-col text-papyrus-white"
          >
          <p 
              className="m-1 mb-0"
            >
              Password:
            </p>
            <input 
              className="flex-1 text-pitch-black bg-sky-soap m-1 rounded-sm border border-dark-walnut"
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
