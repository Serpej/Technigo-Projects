import { Header } from "./components/Header"
import data from "./data.json"
import { Project } from "./components/Project";
import { useState } from "react";


export const App = () => {
  const [showMore, setShowMore] = useState(false);
  const { projects } = data;
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
  const handleShowMore = () => {
    if (showMore) {
      return projectList;
    } else {
      const editedProjectList = projectList.slice(0, 3);
      return editedProjectList;
    }
  }

  return (
    <div className="bodyContainer">
      <Header />
      <h1>Featured Projects</h1>
      <div className="mainContainer">
        {handleShowMore()}
        <button 
          className="showMoreButton"
          onClick= {() => {setShowMore(!showMore)}}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className="techContainer">
        <h1>Tech</h1>
        <h3>HTML, CSS, JavaScript, TypeScript, JSX, React, APIs, GitHub, Git</h3>
      </div>
      <div className="contactContainer">
        <h1>Say Hi!</h1>
        <div className="contactInfoContainer">
          <img className="profileImg" src="../dist/assets/jesperIKvadrat.jpeg" alt="A picture of Jesper" />
          <h3>Jesper Hagerman Borgström</h3>
          <h3>+46(0)76 26 25 922</h3>
          <h3>Jehag@live.se</h3>
        </div>
      </div>
    </div>);
}


