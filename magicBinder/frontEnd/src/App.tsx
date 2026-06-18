import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import { NavBar } from "./pages/NavBar";
import { DropDownMenu } from "./pages/DropDownMenu";
import { SearchBar } from "./pages/SearchBar";

function App() {
  return(
    <BrowserRouter>
      <main
        className="flex flex-col h-screen bg-papyrus-white"
      >
        <NavBar />
        <DropDownMenu />
        <SearchBar />
        <div 
          className="grow min-h-0"
        >
          <Routes>{ routes }</Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
