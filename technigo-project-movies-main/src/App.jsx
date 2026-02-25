import { BrowserRouter, Link, Routes} from "react-router-dom";
import { routes } from "./routes/Routes";

export const App = () => {
  return (    
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      <main>
        <Routes>{ routes }</Routes>
      </main>
      </BrowserRouter>
    </>
  )
}
