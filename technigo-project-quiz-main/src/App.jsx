import { Arrow } from "./components/Arrow";
import { QuestionHeader } from "./components/QuestionHeader"
import { HeaderResult } from "./components/HeaderResult";
import data from './questiondata.json'
import {useEffect, useState} from "react"
import { Personality } from "./components/Personality";

export const App = () => {

const [index, setIndex] = useState(0);

const [colorCounts, setColorCounts] = useState([
  { key: "White", count: 0},
  { key: "Blue", count: 0},
  { key: "Black", count: 0},
  { key: "Red", count: 0},
  { key: "Green", count: 0},
  { key: "Colorless", count: 0}
]);

const [choiceMap, setChoiceMap] = useState(new Map());

const [visibility, setVisibility] = useState(true);
const [showStartScreen, setshowStartScreen] = useState(true);

const handleColorChoice = (colorKey, amount) => {
  setColorCounts( (prev) => {
    const next = prev.map(color => {
      const updated = color.key === colorKey ? {...color, count: color.count + amount} : color;
      return updated
    });
    return next;
  })
};

const { questions } = data;
let questionArray = questions[index];


const handleNextClick = (colorKey, questionIndex) => {

  handleColorChoice(colorKey, 1);

  setChoiceMap(prev => {
    const next = new Map(prev);
    next.set(questionIndex, colorKey)
    return next
  });

  if (index === questions.length -1) {
    setVisibility(false);
    console.log(`End of array`);
  } else {
    setIndex(index + 1);
  }
};

const handlePreviousClick = (questionIndex) => {

  choiceMap.forEach((colorValue, key) => {
    if (key === questionIndex) {
      handleColorChoice(colorValue, -1);
    }
  });

  if(index === 0) {
    console.log(`Index is ${index}. Start of array`);
  } else {
    setIndex(index - 1);
  }
};

const handleStartScreen = () => {
  setshowStartScreen(false);
};

const statementsArray = questionArray.statements.map((statement, questionIndex) => {
const colorKey = statement.key;
  return (
    <p key={colorKey} className="statementParagraph" onClick={() => handleNextClick(colorKey, questionIndex)}>{statement.color}</p>
  )
});

  colorCounts.forEach(color => console.log(`${color.key}: ${color.count}`));

  return (
    <div className="contentContainer">
      <div className={`startingContainer ${!showStartScreen ? 'isHidden' : ''}`}>
        <h1 className="header">Magic Personality Quiz</h1>
        <button className="interactiveButton" onClick={() => handleStartScreen()}>Start Quiz</button>
      </div>
      <div 
        className={`questionsContainer ${!visibility ? 'isHidden' : ''} `}
      >
        <div className="arrowAndHeaderContainer">
          <Arrow onClick={() => handlePreviousClick(questionArray.questionIndex)} />
          <QuestionHeader header={questionArray.header} />
        </div>

        <div className="centerContainer">
          <div className="questionTextContainer">
            {statementsArray}
          </div>
        </div>
        
      </div>
      <div 
        className={`resultContainer ${visibility ? 'isHidden' : ''}`}>
        <HeaderResult />
        <Personality
          colorCounts= {colorCounts} />
      </div>
    </div>
  )
};

