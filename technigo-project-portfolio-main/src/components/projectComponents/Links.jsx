export const Links = ({netlifyIcon, netlifyLink, githubIcon, githubLink})  => {
  return( 
    <div className="linkContainer">
    <a className="link" href={githubLink} target="_blank" rel="noopener noreferrer">
      <img
        className="githubIcon"
        src={githubIcon}
        alt="github icon" />
      <p>View Code</p>
    </a>
    <a className="link" href={netlifyLink} target="_blank" rel="noopener noreferrer">
      <img
        className="netlifyIcon"
        src={netlifyIcon}
        alt="netlify icon" />
      <p>Live Demo</p>
    </a>
    </div>
  );
};