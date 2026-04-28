import { useEffect, useState } from "react";

type HappyThought = {
  _id: string,
  message?: string,
  hearts?: number,
  createdAt?: number,
  _v?: number
}

export const HappyThoughtList = ({loading, thoughts, handleLike}: {
  loading: boolean;  
  thoughts: HappyThought[]; 
  handleLike: (postId:string) => Promise<void>;
}) => {

  if (loading) {
    return <h1 className="loadingStatement">Loading in progress...</h1>
  }


  const getRelativeDate = (thought:HappyThought) => {
    if (typeof thought.createdAt === "number") {
      const createdAt = new Date(thought.createdAt);
      const now = new Date();
      const differenceInMilliseconds = now.getTime() - createdAt.getTime();
      const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
      const differenceInMinutes = Math.floor(differenceInSeconds / 60);
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      const differenceInDays = Math.floor(differenceInHours / 24);
      const differenceInMonths = Math.floor(differenceInDays / 30);

      if (differenceInSeconds < 10) return "just now";
      if (differenceInMinutes < 1) return `${differenceInSeconds} seconds ago`;
      if (differenceInMinutes < 60) return `${differenceInMinutes} minute(s) ago`;
      if (differenceInHours < 24) return `${differenceInHours} hour(s) ago`;
      return `${differenceInDays} day(s) ago`;
    
    } else {
      throw new Error(`"thought.createdAt" property is not number`);
    }
  }

  const thoughtArray = thoughts.map((thought:HappyThought) => {

    return (
    <div key={thought._id} className="thoughtPost">
      <p className="postMessage">{thought.message}</p>
      
      <div className="postInfoContainer">
        <div className="buttonContainer">
          <button
            className="likeButton"
            onClick={() => {handleLike(thought._id)}}
            type="button"
            style= {(thought.hearts ?? 0) > 0 ? {backgroundColor: "#FFADAD"} : {}}>
            <div className="likeButtonHeart">❤️</div>
          </button>
          <p className="greyText"> x {thought.hearts}</p>
        </div>
        <p className="greyText">{getRelativeDate(thought)}</p>
      </div>
    </div>
    )
  })

  return (
    <div className="thoughtPostContainer">
      {thoughtArray}
    </div>
  )


}