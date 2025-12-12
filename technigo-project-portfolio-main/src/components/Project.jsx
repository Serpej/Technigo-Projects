import { ProjectName } from "./projectComponents/ProjectName";
import { ProjectImage } from "./projectComponents/ProjectImage";
import { ProjectTags } from "./projectComponents/ProjectTags";
import { Links } from "./projectComponents/Links";

export const Project = ({name, image, tags, netlifyIcon, githubIcon, githubLink}) => {
  return (
    <div>
      <ProjectName name={name} />
      <ProjectImage image={image} />
      <ProjectTags tags={tags} />
      <Links netlifyIcon={netlifyIcon} githubIcon={githubIcon} githubLink={githubLink} />
    </div>
  );
};