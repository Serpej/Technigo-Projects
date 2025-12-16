export const ProjectTags = ({tags})  => {
  const tagElements =tags.map((tag, i) => {
    return <h3 key={i} className="tags">{tag}</h3>
    
  });
  return (
  <div className="projectTags">
    {tagElements}
  </div>)
};