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
        <DropDownMenu />
        <Routes>{ routes }</Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
