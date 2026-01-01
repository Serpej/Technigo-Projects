import { Arrow } from "./components/Arrow";
import { QuestionHeader } from "./components/QuestionHeader"
import { Result } from "./components/Result";
import data from './data.json'
import {useState} from "react"



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

// Store the last clicked choice if user wants to go back
const [lastColorKey, setLastColorKey] = useState(null);

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
  setLastColorKey(colorKey);
  handleColorChoice(colorKey, 1);

  // Update the setter by cloning previous map and adding the new key: value
  setChoiceMap(prev => {
    const next = new Map(prev);
    next.set(questionIndex, colorKey)
    console.log(`Map size: ${next.size}`);
    return next
  });

  if(index === questions.length -1) {
    console.log(`Index is ${index}. End of array`);
  } else {
    setIndex(index + 1);
  }
};


// Handles clicking on the previous arrow
const handlePreviousClick = (questionIndex) => {
  if(index === 0) {
    console.log(`Index is ${index}. Start of array`);
  } else {
    choiceMap.forEach((colorValue, key) => {
        // 1. Compare statementIndex with map keys
      if (key === questionIndex) {
        handleColorChoice(colorValue, -1);
        console.log(`Question index ${questionIndex} FOUND.`);
      } else {
        console.log(`Question index ${questionIndex} NOT FOUND.`);
        console.log(`Map size: ${choiceMap.size}`);
      }

    });
    setIndex(index - 1);
  }
  };

  const statementsArray = questionArray.statements.map((statement, questionIndex) => {
  const colorKey = statement.key;
    return (
      <p key={colorKey} className="statementParagraph" onClick={() => handleNextClick(colorKey, questionIndex)}>{statement.color}</p>
    )
  })
    console.log(`index of Question was: ${index}. Questions left: ${questions.length - index}.`)
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

