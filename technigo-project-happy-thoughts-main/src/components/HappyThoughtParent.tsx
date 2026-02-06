import { HappyThoughtList } from "./HappyThoughtList";
import { ThoughtInput } from "./ThoughtInput";
import { useState, useEffect } from "react";

type HappyThought = {
  _id: string,
  message?: string,
  hearts?: number,
  createdAt?: string,
  __v?: number
}

export const HappyThoughtParent = () => {
  const [loading, setLoading] = useState(false);
  const [thoughts, setThoughts] = useState<HappyThought[]>([]);
  const [newThought, setNewThought] = useState("");

  const url = "https://happy-thoughts-api-4ful.onrender.com/thoughts";

// Fetches the array of posts
  const fetchThoughtList = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error(`Http request failed: ${response.status}`);
      }
      const data = await response.json()
      setThoughts(data);
    } catch(error) {
      console.log("Error:", error)
    }
    setLoading(false);
  };

// Updates the value of the textarea
  const handleNewThought: React.ChangeEventHandler<HTMLTextAreaElement> = (event): void => {
    const text = event.currentTarget.value
    setNewThought(text);
  }

// Handles the submit Post request 
  const handleOnSumbit: React.FormEventHandler<HTMLFormElement> = async (event): Promise<void> => {
    event.preventDefault();
    const postDescription = {
      message: newThought
    };
    try {
    setLoading(true);
    const makePost = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(postDescription)
    });
    if (!makePost.ok) {
      throw new Error(`Http error: ${makePost.status}`)
    }
    const postData = await makePost.json();
    setThoughts((previousData) => [postData,...previousData]);

    } catch(error) {
      console.log("Posting error", error);
    }
    setNewThought("");
    setLoading(false);
  }

// Handles the psot request for pressing the like button
  const handleLike = async (postId:string): Promise<void> => {
    try {
      setLoading(true);
      const likeUrl = `https://happy-thoughts-api-4ful.onrender.com/thoughts/${postId}/like`;
      const makeALike = await fetch(likeUrl,{
        method: "POST",
        headers: {
        "Content-Type": "application/json"},
        body: JSON.stringify({})
      });
      if (!makeALike.ok) {
        throw new Error(`Http error ${makeALike.status}`);
      };
      const likeData = await makeALike.json();

      setThoughts((previousThoughts) => {
        return previousThoughts.map((thought) => {
          return thought._id === postId ? {...thought, hearts: likeData.hearts} : thought
        });
      });

    } catch(error) {
      console.log("Liking Error occured", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchThoughtList();
  },[]);


  return (
    <div>
      <ThoughtInput
        newThought= {newThought}
        handleNewThought= {handleNewThought}
        onFormSubmit= {handleOnSumbit}
      />

      <HappyThoughtList 
        loading= {loading}
        thoughts= {thoughts}
        handleLike= {handleLike}
      /> 
    </div>
  );
} 