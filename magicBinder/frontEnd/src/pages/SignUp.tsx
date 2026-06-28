import { useState } from "react";
import { handleValue } from "../helperFunctions/handleValue";
import { onSignUpSubmit } from "../helperFunctions/onSignUpSubmit";
import { PageBackground } from "./PageBackground";



export const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");


  return(
    <div
      className="h-full grid grid-rows-[100%]"
    >
      <PageBackground 
        className="grid col-start-1 row-start-1"
      />

      <div
        className= "grid col-start-1 row-start-1 mx-5"
      >
        <section
          className="flex justify-center items-center"
        >
          <form
            onSubmit={(e) => onSignUpSubmit(e, name, email, password, setErrorMessage)}
            className="flex max-w-md w-full flex-col bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-3  border-2 rounded-sm border-deep-hero-blue"
          >
            <label htmlFor="name"
              className="flex flex-col text-papyrus-white"
            >
              <p
                className="m-1 mb-0"
              >
                Name:
              </p>
              <input
                className="flex-1 text-pitch-black bg-sky-soap m-1 rounded-sm border border-dark-walnut"
                type="text"
                name="Name"
                id="name"
                onChange = {(e) => handleValue(e, setName)}
                value={name}
                required
              />
            </label>
            <label htmlFor="email"
              className="flex flex-col text-papyrus-white"
            >
              <p
                className="m-1 mb-0"
              >
                Email:
              </p>
              <input
                className="flex-1 text-pitch-black bg-sky-soap m-1 rounded-sm border border-dark-walnut"
                type="email"
                name="Email"
                id="email"
                onChange = {(e) => handleValue(e, setEmail)}
                value={email}
                required
              />
            </label>
            <label htmlFor="password"
              className="flex flex-col text-papyrus-white"
            >
            <p
                className="m-1 mb-0"
              >
                Password:
              </p>
              <input
                className="flex-1 text-pitch-black bg-sky-soap m-1 rounded-sm border border-dark-walnut"
                type="password"
                name="Password"
                id="password"
                onChange = {(e) => handleValue(e, setPassword)}
                value={password}
                required
              />
            </label>
            <label htmlFor="password"
              className="flex flex-col text-papyrus-white"
            >
            <p
                className="m-1 mb-0"
              >
               Confirm Password:
              </p>
              <input
                className="flex-1 text-pitch-black bg-sky-soap m-1 rounded-sm border border-dark-walnut"
                type="password"
                name="Password"
                id="password"
                onChange = {(e) => handleValue(e, setConfirmPassword)}
                value={confirmPassword}
                required
              />
            </label>
            <button
              className="bg-bright-purple/80 hover:bg-bright-purple border-2 border-baltic-blue hover:border-deep-hero-blue/70 shadow-2xl px-1 py-0.5 m-1 rounded-sm cursor-pointer transition delay-80 hover:scale-105"
              type="submit"
            >
              Sign Up
            </button>
            {errorMessage && (
              <p
                className="text-red-400 text-sm m-1"
              >
              {errorMessage}
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  )
}
