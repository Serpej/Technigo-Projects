import { PageBackground } from "./PageBackground";
import deltaBackground from "../assets/deltaBackground.png"
import { SearchBar } from "./SearchBar";
import { useAuthStore } from "../stores/useAuthStore";


export const ProfilePage = () => {
  const user = useAuthStore((state) => state.userName);
  const email = useAuthStore((state) => state.userEmail);
  return(
    <div
      className="grid grid-rows-[1fr] h-full"
    >
    <div
      className="grid col-start-1 row-start-1 grid-rows-[auto_1fr] min-h-0 overflow-hidden"
    >
        <SearchBar
          className="col-start-1 row-start-1"
        />
        <PageBackground
          className="col-start-1 row-start-2"
          src={deltaBackground}
          alt="A beautiul view of a delta landscape in dusk."
        />
    </div>
    <div
      className="grid col-start-1 row-start-1 place-self-center"
    >

        <h2>Welcome {user} with email: {email}</h2>
        <div
          className="bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-3  border-2 rounded-sm border-deep-hero-blue"
        >
        <h3>
          Here is where the add binder array will go.
        </h3>
      </div>
    </div>
    </div>
  )
}