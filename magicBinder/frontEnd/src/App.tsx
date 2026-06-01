import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  return(
    <BrowserRouter>
      <main>
        <Routes>{ routes }</Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
