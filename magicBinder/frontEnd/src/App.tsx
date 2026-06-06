import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import { NavBar } from "./pages/NavBar";

function App() {
  return(
    <BrowserRouter>
      <main
        className=" min-h-screen bg-papyrus-white"
      >
        <NavBar />
        <Routes>{ routes }</Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
