import { PageBackground } from "./PageBackground"

export const About = () => {
 return(
    <div
      className="h-full grid grid-rows-[100%]"
    >
      <PageBackground
        className="grid col-start-1 row-start-1"
      />

      <div
        className= "grid col-start-1 row-start-1 mx-5 "
      >
        <section
          className="flex justify-center items-center"
        >
          <div
            className="flex max-w-md w-full flex-col bg-baltic-blue/50 backdrop-blur-sm shadow-2xl py-3 px-5 border-2 rounded-sm border-deep-hero-blue"
          >
            <h1
              className="text-3xl text-center text-papyrus-white p-8  leading-0 font-medium"
            >About</h1>
              <p
                className="text-xl text-center text-papyrus-white"
              >  
                This app is made as a part of the bootcamp from Technigo.
                Magic binder is exacly what it sounds like (at least to Magic the Gathering nerds), a binder full of you magic cards!
                The idea is that you can search for and store the cards you currently would like to sell or trade with other people. It uses the tech stack:
              </p>
              <p
                className="text-xl text-center text-papyrus-white mt-3"
              >
                React (Router), Typescript, Node express and MongoDB. The project is deployed via Netlify and Render.
              </p>

          
          </div>
        </section>
      </div>
    </div>
 )
}