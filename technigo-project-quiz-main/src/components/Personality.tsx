import colorInformation from '../guilddata.json'
import { useState } from 'react';

type ColorCount = {key: string; count: number};

export const Personality = ({colorCounts}: {colorCounts: ColorCount[]}) => {

const { guilds } = colorInformation;
const { guilds:{ monoColored }} = colorInformation;

const sortedCountResultArray = Array.from(colorCounts).sort((a,b) => b.count - a.count);

const firstColorKey: string = sortedCountResultArray[0].key;
const secondColorKey: string = sortedCountResultArray[1].key;
const thirdColorKey: string = sortedCountResultArray[2].key;

const monoColoredResult = monoColored?.find( c => c.colors.includes(firstColorKey));


/*switchcase(onClick)

firstButton === useState(monoColored) || 
secondButton === useState(twoColored) || 
thirdButton === useState(threeColored) */
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

const multicoloredResultArray = removeColorless(sortedCountResultArray);


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