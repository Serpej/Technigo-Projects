import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppContent } from "./routes/AppContent";

function App() {
  return(
    <BrowserRouter>
      <main
        className="flex flex-col h-screen bg-papyrus-white"
      >
        <NavBar />
          <AppContent 
            className="grow min-h-0"
          />
      </main>
    </BrowserRouter>
  )
}

export default App
