import { useState } from "react";
import { handleValue } from "../helperFunctions/handleValue";
import { fetchLoginResponse } from "../services/Loginservice";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return(
    <div>
      <h3>Login</h3>
      <section>
        <form action="">
          <label htmlFor="email">
            Email:
            <input 
              type="email" 
              name="Email"
              id="email"
              onChange = {(e) => handleValue(e, setEmail)} 
              defaultValue={email}
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
              defaultValue={password}
              required
            />
          </label>
        </form>
      </section>
    </div>
  )
}
