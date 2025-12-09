import { ProjectName } from "./projectComponents/ProjectName";
import { ProjectImage } from "./projectComponents/ProjectImage";
import { ProjectTags } from "./projectComponents/ProjectTags";
import { Links } from "./projectComponents/Links";

export const Project = ({name, image, tags, netlify, github}) => {
  return (
    <div>
      <ProjectName name={name} />
      <ProjectImage image={image} />
      <ProjectTags tags={tags} />
      <Links netlify={netlify} github={github} />
    </div>
  );
};