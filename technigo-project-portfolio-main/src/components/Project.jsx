import { ProjectName } from "./projectComponents/ProjectName";
import { ProjectImage } from "./projectComponents/ProjectImage";
import { ProjectTags } from "./projectComponents/ProjectTags";
import { Links } from "./projectComponents/Links";

export const Project = ({name, image, tags, netlifyIcon,netlifyLink, githubIcon, githubLink}) => {
  return (
    <div className="project">
      <ProjectImage image={image} netlifyLink={netlifyLink}/>
      
      <div className="projectInfo">
        <ProjectTags tags={tags} />
        <ProjectName name={name} />
        
        <Links netlifyIcon={netlifyIcon} netlifyLink={netlifyLink} githubIcon={githubIcon} githubLink={githubLink} />
      </div>
    </div>
  );
};