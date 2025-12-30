import { QuestionHeader } from "./components/QuestionHeader"
import data from './data.json'
import {useState} from "react"



export const App = () => {

const [index, setIndex] = useState(0);

// Destructure the questions array from data
const { questions } = data;
let questionArray = questions[index];

// Clickhandler
const handleClick = (colorChoice) => {
  handleColorChoice(colorChoice);
  setIndex(index + 1);
};

const statementsArray = questionArray.statements.map((statement) => {
  let colorChoice = statement.color;
  return (
    <p key={statement.key} className="statementParagraph" onClick={ ({colorChoice}) => handleClick}>{colorChoice}</p>
  )
})

  return (
    <div>
      <QuestionHeader header={questionArray.header} />
      {statementsArray}
    </div>
  )
};
