export const ProjectImage = ({image, artist, netlifyLink})  => {
  return (
    <a href={netlifyLink} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={`art by ${artist}`} className="projectImage" />
      <span>art by {artist}</span>
    </a>
  )
};