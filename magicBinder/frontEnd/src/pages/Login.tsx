import { useState } from "react";
import { handleValue } from "../helperFunctions/handleValue";
import { onLoginSubmit } from "../helperFunctions/onLoginSubmit";


export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return(
    <div>
      <h3>Login</h3>
      <section>
        <form
          onSubmit={(e) => onLoginSubmit(e, email, password)}
        >
          <label htmlFor="email">
            Email:
            <input 
              type="email" 
              name="Email"
              id="email"
              onChange = {(e) => handleValue(e, setEmail)} 
              value={email}
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input 
              type="password" 
              name="Password"
              id="password"
              onChange = {(e) => handleValue(e, setPassword)}
              value={password}
              required
            />
          </label>
          <button
            className="bg-dark-walnut"
            type="submit"  
          >
            Login
          </button>
        </form>
      </section>
    </div>
  )
}
