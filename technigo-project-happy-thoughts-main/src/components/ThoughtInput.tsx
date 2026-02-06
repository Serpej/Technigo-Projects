export const ThoughtInput = ({newThought, handleNewThought, onFormSubmit}: {newThought: string; 
  handleNewThought: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFormSubmit: React.FormEventHandler<HTMLFormElement>}) =>{

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h1>What Do You Want To Share?</h1>
          <textarea
            value= {newThought}
            onChange = {handleNewThought}
            placeholder="Type a happy thought"
          />
          <button type="submit" >Submit Thought!</button>
      </form>
    </div>
  )
}