import { ProjectName } from "./projectComponents/ProjectName";
import { ProjectImage } from "./projectComponents/ProjectImage";
import { ProjectTags } from "./projectComponents/ProjectTags";
import { Links } from "./projectComponents/Links";
import { Description } from "./projectComponents/Description";

export const Project = ({name, image, tags,description, netlifyIcon, netlifyLink, githubIcon, githubLink}) => {
  return (
    <div className="project">
      <ProjectImage image={image} netlifyLink={netlifyLink}/>
      
      <div className="projectInfo">
        <ProjectTags tags={tags} />
        <ProjectName name={name} />
        <Description description={description} />
        <Links netlifyIcon={netlifyIcon} netlifyLink={netlifyLink} githubIcon={githubIcon} githubLink={githubLink} />
      </div>
    </div>
  );
};