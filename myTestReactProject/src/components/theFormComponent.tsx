import React, { useState } from "react"

export const Theform = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userName, userEmail);
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="enter your name" onChange={(e) => {setUserName(e.target.value)}} value={userName} required/>

            <input type="email" placeholder="enter your email" onChange={(e) => {setUserEmail(e.target.value)}} value={userEmail} required />

            <button type="submit">Submit</button>

        </form>

    </div>
  )
}