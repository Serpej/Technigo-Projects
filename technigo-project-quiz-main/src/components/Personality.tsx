import colorInformation from '../guilddata.json'
import { useState } from 'react';

export const Personality = () => {

const [colorCombinationIndex, setcolorCombinationIndex] = useState(0);

// Destructure information from guildData
const { guilds } = colorInformation;
const colorArray = guilds[colorCombinationIndex];

const src = colorArray?.monoColored?.[0]?.img_src.trim();
const name = colorArray?.monoColored?.[0]?.name;
const description = colorArray?.monoColored?.[0]?.description;

return (
  <div className="personalityInformationContainer">
    <img 
      className="guildImage"
      src={src} 
      alt="guild image"
      referrerPolicy="no-referrer" />
      <h1>{name}!</h1>
    <p className="personalityDescription">{description}</p>
  </div>
)
}