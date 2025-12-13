export const ProjectImage = ({image, netlifyLink})  => {
  return (
    <a href={netlifyLink} target="_blank" rel="noopener noreferrer">
      <img src={image} alt="project image" className="projectImage" />
    </a>
  )
};