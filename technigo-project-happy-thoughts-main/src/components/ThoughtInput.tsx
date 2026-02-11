export const ThoughtInput = ({newThought, handleNewThought, onFormSubmit}: {newThought: string; 
  handleNewThought: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFormSubmit: React.FormEventHandler<HTMLFormElement>}) =>{

  return (
    <div className="submitFormContainer">
      <form className="submitForm" onSubmit={onFormSubmit}>
        <p>What's making you happy right now?</p>
          <textarea className="textInput"
            value= {newThought}
            onChange = {handleNewThought}
            maxLength={140}
            minLength={5}
            required
          />
          <button className="submitThoughtButton" type="submit">❤️ Send Happy Thought! ❤️</button>
      </form>
    </div>
  )
}