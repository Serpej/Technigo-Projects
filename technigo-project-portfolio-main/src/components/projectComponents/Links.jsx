export const Links = ({netlifyIcon, netlifyLink, githubIcon, githubLink})  => {
  return( 
    <div>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <img
        className="githubIcon"
        src={githubIcon}
        alt="github icon" />
    </a>
    <a href={netlifyLink} target="_blank" rel="noopener noreferrer">
      <img
        className="netlifyIcon"
        src={netlifyIcon}
        alt="netlify icon" />
    </a>
    </div>
  );
};