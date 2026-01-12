import colorInformation from '../guilddata.json'
import { useState } from 'react';

type ColorCount = {key: string; count: number};

export const Personality = ({colorCounts}: {colorCounts: ColorCount[]}) => {

const [colorButton, setColorButton] = useState(0);

const { guilds:{ monoColored }} = colorInformation;
const { guilds:{ twoColored }} = colorInformation;
const { guilds:{ threeColored }} = colorInformation;

const sortedCountResultArray = Array.from(colorCounts).sort((a,b) => b.count - a.count);

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

const monoColorKey: string = sortedCountResultArray[0].key;
const firstMultiColorKey: string = multicoloredResultArray[0].key;
const secondMultiColorKey: string = multicoloredResultArray[1].key;
const thirdMultiColorKey: string = multicoloredResultArray[2].key;

const monoColoredResult = monoColored?.find( c => c.colors.includes(monoColorKey));

const twoColoredResults = twoColored?.find(c => 
  c.colors.includes(firstMultiColorKey) && 
  c.colors.includes(secondMultiColorKey)
);
const threeColoredResults = threeColored?.find(c => 
  c.colors.includes(firstMultiColorKey) && 
  c.colors.includes(secondMultiColorKey) && 
  c.colors.includes(thirdMultiColorKey)
);

let src: string | undefined = "";
let name: string | undefined  = "";
let description: string | undefined  = "";
let quote: string | undefined = "";

if (colorButton === 0) {
  src = monoColoredResult?.img_src.trim();
  name = monoColoredResult?.name;
  description = monoColoredResult?.description;
  quote = monoColoredResult?.quote;
} else if(colorButton === 1) {
  src = twoColoredResults?.img_src.trim();
  name = twoColoredResults?.name;
  description = twoColoredResults?.description;
  quote = twoColoredResults?.quote;
} else if (colorButton == 2) {
  src = threeColoredResults?.img_src.trim();
  name = threeColoredResults?.name;
  description = threeColoredResults?.description;
  quote = threeColoredResults?.quote;
}

return (
  <div className="personalityInformationContainer">
    <img 
      className="guildImage"
      src={src} 
      alt="guild image"
      referrerPolicy="no-referrer" />
    <h1>{name}!</h1>
    <p className='quote'><i>{quote}</i></p>
    <p className="personalityDescription">{description}</p>
    <div className="colorButtonContainer">
      <button className='colorAmountButton' onClick={() => {setColorButton(0)}}>Mono Colored Result</button>
      <button className='colorAmountButton' onClick={() => {setColorButton(1)}}>Two Colored Result</button>
      <button className='colorAmountButton' onClick={() => {setColorButton(2)}}>Three Colored Result</button>
    </div>
  </div>
)
}