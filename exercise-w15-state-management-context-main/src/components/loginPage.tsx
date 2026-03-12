import { Context } from "../components/CreateContext";
import { useContext, useEffect } from "react";

const blackOnWhiteColor = "rgb(255, 255, 255), rgb(0, 0, 0)"
const whiteOnBlackColor = "rgb(0, 0, 0), rgb(255, 255, 255)";


export const LoginPage = () => {
  const {theme, setTheme} = useContext(Context);
  console.log(theme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme])

  return (
    <div className=" bg-primary dark:bg-primary-dark dark:text-primary-dark text-primary flex min-h-screen min-w-screen items-center justify-center flex-col relative"
  /*     style={{background: `linear-gradient(145deg, ${theme === "light" ? blackOnWhiteColor : whiteOnBlackColor})`}} */
    >
      <button
        className="bg-primary-dark dark:bg-primary dark:text-primary-dark text-primary  p-2 m-3 cursor-pointer border rounded-md absolute top-0 left-0"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        type="button">
        {theme} mode
      </button>
      <img 
        className="max-w-sm  mb-10 rounded-md border shadow-md border-black dark:border-white"
        src="https://imgs.search.brave.com/x40XqymZ5DdOvmMy2qY1owa2xIEcOBPLQjiXC1eFlIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzYyNjE0MTk4L3Iv/aWwvOTE2ZWJiLzc3/NzIwMzc2ODcvaWxf/Nzk0eE4uNzc3MjAz/NzY4N180c2lsLmpw/Zw" 
        alt="" 
      />
      <form className="bg-secondary dark:bg-secondary-dark  border-[3px] border-black dark:border-white p-5 rounded-md mb-10 shadow-md" action="">
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