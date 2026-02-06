// Import required  hooks
import { DogFact } from "./components/DogFact";
import {useState, useEffect} from "react";

type DogObject = {
  id: string;
  type: string;
  attributes: {
    body: string;
  }
}

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState<DogObject>();
  const [refetch, setRefetch] = useState(0);

  // Hint: Define the API endpoint
  const url = "https://dogapi.dog/api/v2/facts";

  // Hint: Create a function to fetch the dog fact

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP failure! Status ${response.status}`)
      }
      const result = await response.json();
      const dogObject = result.data[0];
      setDogFact(dogObject);
    } catch (error) {
      console.log(`Error fething data`, error);
    }
  };

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

    useEffect(() => {
    fetchData(url);
  }, [refetch]);

  return (
    <div className="App">
      {dogFact && <DogFact dogObject= {dogFact} />}
      {dogFact && <button className="factButton" onClick={() => setRefetch(prev => prev + 1)}>New Fact!</button>}
    </div>
  );
};
