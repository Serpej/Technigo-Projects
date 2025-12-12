import { Header } from "./components/Header"
import data from "./data.json"
import { Project } from "./components/Project";

export const App = () => {
  const { projects } = data;
  console.log(projects);
  const projectList = projects.map((project) => {
  const  tagString = project.tags.join(", ")
    return <Project key={project.name}
                    name={project.name}
                    image={project.image}
                    tags={tagString}
                    netlifyIcon={project.netlifyIcon}
                    githubIcon={project.githubIcon}
                    githubLink={project.githubLink} />
  });
  return (
    <div>
      <Header />
      {projectList}
    </div>);
}


