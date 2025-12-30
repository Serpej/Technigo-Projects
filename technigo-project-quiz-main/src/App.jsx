import { QuestionHeader } from "./components/QuestionHeader"
import { QuestionStatements } from "./components/QuestionStatements"
import data from './data.json'
import {useState} from "react"



export const App = () => {

const [index, setIndex] = useState(0);


const { questions } = data
let questionArray = questions[index]

const statementArray = questionArray.statements.map((statement) => {
  return (
    <p key={statement}>{statement}</p>
  )
})

  return (
    <div>
      <QuestionHeader header={questionArray.header} />
      {statementArray}
    </div>
  )
}
