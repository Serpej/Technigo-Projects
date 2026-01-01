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

// Store the last clicked choice if user wants to go back
const [lastColorKey, setLastColorKey] = useState(null);

// Destructure the questions array from data
const { questions } = data;
let questionArray = questions[index];


// A state function updater. It updates the count of the useState Array with objects.
const handleColorChoice = (colorKey, amount) => {
  setColorCounts( (previousStateReactArray) => {
    const nextStateReactArray = previousStateReactArray.map(color => {
      const updated = color.key === colorKey ? {...color, count: color.count + amount} : color;
      return updated
    })

    // For checking the score of the choices
    const selected = nextStateReactArray.find(c => c.key === colorKey)
    if (selected) {
    console.log(`Key changed, ${selected.key} is now ${selected.count}`)
    }
    
    return nextStateReactArray;
  })
};

// Handles clicking on one of the statements
const handleNextClick = (colorKey) => {
  setLastColorKey(colorKey);
  handleColorChoice(colorKey, 1);
  if(index === questions.length -1) {
    console.log(`Index is ${index}. End of array`)
  } else {
    setIndex(index + 1);
    console.log(`index is now ${index + 1}. Array Length ${questions.length}`)
  }
};


// Handles clicking on the previous arrow
const handlePreviousClick = () => {
  if(index === questions.length -3) {
    console.log(`Index is ${index}. Start of array`)
  } else {
    if (lastColorKey) {
      handleColorChoice(lastColorKey, -1);
    }
    setIndex(index - 1);
    console.log(`index is now ${index + 1}. Array Length ${questions.length}`)
  }
};

const statementsArray = questionArray.statements.map((statement) => {
  const colorKey = statement.key;
  return (
      <p key={colorKey} className="statementParagraph" onClick={() => handleNextClick(colorKey)}>{statement.color}</p>
  )
})

  return (
    <div>
      <div className="questionsContainer">
        <Arrow onClick={handlePreviousClick} />
        <QuestionHeader header={questionArray.header} />
        {statementsArray}
      </div>
      <div className="resultContainer">
      <Result />
      </div>
    </div>
  )
};

