import { useLocation, Routes, Route} from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { About } from "../components/About";
import { SignUp } from "../components/SignUp";
import { NewBinder } from "../components/NewBinder";
import { ProfilePage } from "../components/ProfilePage";
import { PrivateRoutes } from "./privateRoutes";
import { CardSearchResults } from "../components/CardSearchResults";
import { Binder } from "../components/Binder";
import { CardDetails } from "../components/CardDetails";

interface AppContentProps {
  className: string;
}

export const AppContent = ({ className }: AppContentProps) => {
  const location = useLocation();
  const background  = location.state && location.state.background;

  return (
    <div
      className={`${className}`}
    >
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={< SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<CardSearchResults />} />
        <Route path="/card" element={<CardDetails />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profilepage" element={<ProfilePage />} />
        </Route>
      </Routes>

      {background && (
      <Routes>
        <Route path="/card" element={<CardDetails />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/newbinder" element={<NewBinder />}/>
          <Route path="/binder" element={<Binder />}/>
        </Route>
      </Routes>
      )}
    </div>
  )
}