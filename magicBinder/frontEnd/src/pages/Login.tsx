import { useState } from "react"

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleValue = (
    event: React.ChangeEvent<HTMLInputElement>, 
    setUseState: React.Dispatch<React.SetStateAction<string>>):void => {
    const text = event.currentTarget.value;
    setUseState(text);
  }
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
              required
            />
          </label>
        </form>
      </section>
    </div>
  )
}
