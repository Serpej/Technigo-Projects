// TODO: Import necessary modules and data
import { useParams } from "react-router-dom";
import { songs } from "../data/songs.json";

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {

  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const params = useParams();
  console.log(params);
  const chosenSong = songs.find((song) => params.songTitle === song.title);
  console.log(chosenSong.title);


  return (
    <>
      <div>
        <h2>{chosenSong.title}</h2>
        <ul>
          <li>Rank: {chosenSong.rank}</li>
          <li>Album: {chosenSong.album}</li>
          <li>Artist: {chosenSong.artist}</li>
          <li>Year: {chosenSong.year}</li>
        </ul>

      </div>
    </>
  );
}

export default SongInfo;
