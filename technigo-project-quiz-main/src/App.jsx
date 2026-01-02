import { Arrow } from "./components/Arrow";
import { QuestionHeader } from "./components/QuestionHeader"
import { Result } from "./components/Result";
import data from './data.json'
import {useEffect, useState} from "react"



export const App = () => {


const [index, setIndex] = useState(0);

// useState Hook to remember what choices user has made
const [colorCounts, setColorCounts] = useState([
  { key: "Blue", count: 0},
  { key: "Green", count: 0},
  { key: "Black", count: 0},
  { key: "White", count: 0},
  { key: "Red", count: 0},
  { key: "Colorless", count: 0}
]);

const [choiceMap, setChoiceMap] = useState(new Map())

// Destructure the questions array from data
const { questions } = data;
let questionArray = questions[index];

// A state function updater. It updates the count of the useState Array with objects.
const handleColorChoice = (colorKey, amount) => {
  setColorCounts( (prev) => {
    const next = prev.map(color => {
      const updated = color.key === colorKey ? {...color, count: color.count + amount} : color;
      return updated
    });
    return next;
  })
};

// Handles clicking on one of the statements
const handleNextClick = (colorKey, questionIndex) => {

  handleColorChoice(colorKey, 1);

  // Update the setter by cloning previous map and adding the new key: value
  setChoiceMap(prev => {
    const next = new Map(prev);
    next.set(questionIndex, colorKey)
    return next
  });

  if(index === questions.length -1) {
    console.log(`End of array`);
  } else {
    setIndex(index + 1);
  }
};


// Handles clicking on the previous arrow
const handlePreviousClick = (questionIndex) => {

  // Remove the choice that was made for the specific question
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

  const statementsArray = questionArray.statements.map((statement, questionIndex) => {
  const colorKey = statement.key;
    return (
      <p key={colorKey} className="statementParagraph" onClick={() => handleNextClick(colorKey, questionIndex)}>{statement.color}</p>
    )
  });

  // Logs the counts
  colorCounts.forEach(color => console.log(`${color.key}: ${color.count}`));

  return (
    <div>
      <div className="questionsContainer">
        <Arrow onClick={() => handlePreviousClick(questionArray.questionIndex)} />
        <QuestionHeader header={questionArray.header} />
        {statementsArray}
      </div>
      <div className="resultContainer">
        <Result />
      </div>
    </div>
  )
};

