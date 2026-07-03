import heroBannerBigQuadrant from "../assets/heroBannerBigQuadrant.png"

interface PageBackgroundProps {
  className: string;
  src?: string;
  alt?: string;
}

export const PageBackground = ({ className, src, alt }: PageBackgroundProps) => {
  return (
    <div
      className={`${className} h-full w-full overflow-hidden grid grid-rows-[100%] border-t border-deep-hero-blue bg-deep-hero-blue`}
    >
      <img 
        src={src || heroBannerBigQuadrant} 
        alt={alt || `Epic landscape of a winding lake and mountains in dusk.`} 
        className="h-full w-full object-cover object-[41%_59%] col-start-1 row-start-1"
      />
      <div className="col-start-1 row-start-1 bg-linear-to-r from-deep-hero-blue from-10% via-transparent via-50% to-deep-hero-blue to-90%"></div>  
    </div>
  )
}