// DogFact Component

type DogObject = {
  id: string;
  type: string;
  attributes: {
    body: string;
  }
}

export const DogFact = ({dogObject}: {dogObject: DogObject}) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
  const body = dogObject.attributes.body;
  const type = dogObject.type;
  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return (    
    <div className="dogContainer">
      <div className="factContainer">{type}:</div>
      <div className="dogFactContainer">
        <div className="dogFact">
        {body}
        </div>
      </div>
    </div>)
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
