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
                    description={project.description}
                    netlifyIcon={project.netlifyIcon}
                    netlifyLink={project.netlifyLink}
                    githubIcon={project.githubIcon}
                    githubLink={project.githubLink} />
  });
  return (
    <div className="bodyContainer">
      <Header />
      <h1>Featured Projects</h1>
      <div className="mainContainer">
        {projectList}
      </div>
      <div className="techContainer">
        <h1>Tech</h1>
      </div>
      <div className="skillsContainer"></div>
        <h1>Skills</h1>
      <div className="contactContainer">
        <h1>Say Hi</h1>
      </div>
    </div>);
}


