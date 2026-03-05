export const ProjectImage = ({image, artist, netlifyLink})  => {
  return (
      <a 
        href={netlifyLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="projectImageAndArtistContainer"
        >
          <img src={image} alt={`art by ${artist}`} className="projectImage" />
          <p className="artistName">Art by {artist}</p>
      </a>   
  )
};