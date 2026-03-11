import { Context } from "../components/CreateContext";
import { useContext } from "react";

export const LoginPage = () => {
  const {theme, setTheme} = useContext(Context);
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center flex-col relative"
      style={{background: "linear-gradient(145deg, rgb(255, 255, 255), rgb(0, 0, 0))"}}
    >
      
      <button
        className="p-2 m-3 cursor-pointer border rounded-md absolute top-0 left-0"
        style={{
          background: `${theme === "light" ? "black" : "white"}`, 
          color: `${theme === "light" ? "white" : "black"}`
        }}
        onClick={() => {{theme === "light" ? setTheme("dark") : setTheme("light") }}}
        type="button">
        {theme} mode
      </button>
      <img 
        className="max-w-sm  mb-10 rounded-md border shadow-md"
        src="https://imgs.search.brave.com/x40XqymZ5DdOvmMy2qY1owa2xIEcOBPLQjiXC1eFlIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzYyNjE0MTk4L3Iv/aWwvOTE2ZWJiLzc3/NzIwMzc2ODcvaWxf/Nzk0eE4uNzc3MjAz/NzY4N180c2lsLmpw/Zw" 
        alt="" 
      />
      <form className="bg-purple-400 border p-5 rounded-md mb-10 shadow-md" action="">
        <h1 className="text-2xl font-bold">Login here</h1>
        <input
          className="border m-1.5 p-1 bg-white"
          type="text" />
        <input 
          className="border m-1.5 p-1 bg-white"
          type="password" 
          name="" 
          id="" />
        <div className="flex">
          <button
            className="p-2 m-3 cursor-pointer bg-amber-400 border rounded-md"
            type="button">
            Login
          </button >
        </div>
      </form>
    </div>
  )
}