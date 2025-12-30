import { QuestionHeader } from "./components/QuestionHeader"
import data from './data.json'
import {useState} from "react"



export const App = () => {

const [index, setIndex] = useState(0);
const [colorCounts, setColorCounts] = useState([
  { key: "Blue", count: 0},
  { key: "Green", count: 0},
  { key: "Black", count: 0},
  { key: "White", count: 0},
  { key: "Red", count: 0},
  { key: "Colorless", count: 0}
])

// Destructure the questions array from data
const { questions } = data;
let questionArray = questions[index];


// A state function updater. It updates the count of the useState Array with objects.
const handleColorChoice = (colorKey) => {
  setColorCounts( previousStateReactArray => {
    const nextStateReactArray = previousStateReactArray.map(color => {
      const updated = color.key === colorKey ? {...color, count: color.count + 1} : color;
      return updated
    })

    const selected = nextStateReactArray.find(c => c.key === colorKey)

    if (selected) {
    console.log(`Key changed, ${selected.key} is now ${selected.count}`)
    }
    
    return nextStateReactArray;
  })
};

// Clickhandler
const handleClick = (colorKey) => {
  handleColorChoice(colorKey);
  setIndex(index + 1);
};

const statementsArray = questionArray.statements.map((statement) => {
  const colorKey = statement.key;
  return (
    <p key={colorKey} className="statementParagraph" onClick={() => handleClick(colorKey)}>{statement.color}</p>
  )
})

  return (
    <div>
      <QuestionHeader header={questionArray.header} />
      {statementsArray}
    </div>
  )
};

