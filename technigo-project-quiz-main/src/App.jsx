import { QuestionComponent } from "./components/questionComponent"
import data from './data.json'

export const App = () => {
const { questions } = data
const questionArray = questions.map((question) => {
  return (
    <QuestionComponent  key={question.header} header={question.header} />
  )
})
  return (
    <div>
      {questionArray}
    </div>
  )
}
