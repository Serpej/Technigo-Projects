import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import { NavBar } from "./pages/NavBar";

function App() {
  return(
    <BrowserRouter>
      <main>
        <NavBar />
        <Routes>{ routes }</Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
