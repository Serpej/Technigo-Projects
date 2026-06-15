import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import { NavBar } from "./pages/NavBar";
import { DropDownMenu } from "./pages/DropDownMenu";


function App() {
  return(
    <BrowserRouter>
      <main
        className="bg-papyrus-white"
      >
        <NavBar />
        <DropDownMenu 
          className="flex justify-end items-center bg-papyrus-white"
        />
        <Routes>{ routes }</Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
