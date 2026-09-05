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
        className= "grid col-start-1 row-start-1 mx-5"
      >
        <section
          className="flex justify-center items-center"
        >
          <div
            className="flex max-w-md w-full flex-col bg-baltic-blue/50 backdrop-blur-sm shadow-2xl p-3  border-2 rounded-sm border-deep-hero-blue"
          >
            Here is where the About text is going to be
          
          </div>
        </section>
      </div>
    </div>
 )
}