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
  <div>
    <h2>{name}</h2>
    <img 
      src={src} 
      alt="guild image"
      referrerPolicy="no-referrer" />
    <p>{description}</p>
  </div>
)
}