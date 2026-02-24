// TODO: Import necessary modules and data
import { songs } from "../data/songs.json"
import { Link } from "react-router-dom"
function Home() {
  const songList = songs.map((song) => {
    return (
      <li key={song.rank}> 
        <Link to={`/songs/${song.title}`}>
        {song.title}
        </Link>
      </li>)
  })
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        <ul >{songList}</ul>
      </div>
    </>
  );
}

export default Home;
