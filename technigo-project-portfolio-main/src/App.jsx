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
        <h3>HTML, CSS, JavaScript, TypeScript, JSX, React, APIs, GitHub, Git</h3>
      </div>
      <div className="contactContainer">
        <h1>Say Hi!</h1>
        <div className="contactInfoContainer">
          <img className="profileImg" src="https://media.licdn.com/dms/image/v2/D4D03AQGlIeRF3ReILw/profile-displayphoto-scale_200_200/B4DZoMKXRHH4Ac-/0/1761140636054?e=1767830400&v=beta&t=8_ceWv_hsgAoxEyHpLBlPpAp6T7mEDrYayRKzcwDp0g" alt="A picture of Jesper" />
          <h3>Jesper Hagerman Borgström</h3>
          <h3>+46(0)76 26 25 922</h3>
          <h3>Jehag@live.se</h3>
        </div>
      </div>
    </div>);
}


