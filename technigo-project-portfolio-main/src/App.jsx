import { Header } from "./components/Header"
import data from "./data.json"
import { Project } from "./components/Project";

export const App = () => {
  const { projects } = data;
  console.log(projects);
  const projectList = projects.map((project) => {
    return <Project key={project.name}
                    name={project.name}
                    image={project.image}
                    tags={project.tags}
                    netlify={project.netlify}
                    github={project.github} />
  });
  return (
    <div>
      <Header />
      {projectList}
    </div>);
}
