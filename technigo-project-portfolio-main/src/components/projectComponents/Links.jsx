export const Links = ({netlify, github})  => {
  return( 
    <div>
    <img className="link" src={github} alt="github icon" />
    <img className="link" src={netlify} alt="netlify" />
    </div>
  );
};