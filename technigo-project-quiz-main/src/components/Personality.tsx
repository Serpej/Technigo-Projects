import colorInformation from '../guilddata.json'
import { useState } from 'react';

type ColorCount = {key: string; count: number};

export const Personality = ({colorCounts}: {colorCounts: ColorCount[]}) => {

const [colorCombinationIndex, setcolorCombinationIndex] = useState(0);

// Destructure information from guildData
const { guilds } = colorInformation;
const colorArray = guilds[colorCombinationIndex];

// Sort the results including Colorless
const sortedCountArray = Array.from(colorCounts).sort((a,b) => b.count - a.count);

// variable of top result
const monoColoredKey: string = sortedCountArray[0].key;

// Find corresponding object
const monoColoredResult = colorArray.monoColored?.find( c => c.colors.includes(monoColoredKey));

const src = monoColoredResult?.img_src.trim();
const name = monoColoredResult?.name;
const description = monoColoredResult?.description;




// Function for removing Colorless from the array in order to search for multicolored factions 
const removeColorless = (sortedCountArray: ColorCount[]) => {
  const arrayWithoutColorless: ColorCount[] = [];
  sortedCountArray.map((object) => {
    if(object.key !== "Colorless") {
      arrayWithoutColorless.push(object);
    };
  });
    return arrayWithoutColorless
};

const multicoloredResultArray = removeColorless(sortedCountArray);





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