import heroBanner from "../assets/HeroBanner.png"
export const Hero = () => {
  return (
    <div
      className="grid border-t border-dark-walnut bg-deep-hero-blue"
    >
    <img 
      src={heroBanner} 
      alt="Epic landscape of a winding lake and mountains in dusk." 
      className="col-start-1 row-start-1 justify-self-center max-w-full"
    />
    <div className="col-start-1 row-start-1 bg-linear-to-r from-deep-hero-blue from-20% via-transparent via-50% to-deep-hero-blue to-80%"></div>

    <div
    className="col-start-1 row-start-1 place-self-center"
    >
     <h1 className="text-gray-pearl-white font-bold text-4xl "> ADD</h1>
     <h1 className="text-gray-pearl-white font-bold text-4xl">SEARCH</h1>
     <h1 className="text-gray-pearl-white font-bold text-4xl"> TRADE</h1>
    </div>
      
    </div>
  )
}