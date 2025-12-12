export const Links = ({netlifyIcon, githubIcon, githubLink})  => {
  return( 
    <div>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <img
        className="githubLink"
        src={githubIcon}
        alt="github icon" />
    </a>
    <img 
      className="netlifyLink" 
      src={netlifyIcon} 
      alt="netlify icon" />
    </div>
  );
};