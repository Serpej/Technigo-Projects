import data from "../data.json";

export const HeaderImages = () => {
  const { projects } = data;
  const featuredProjectImages = projects.map((project, i) => {
    if (i < 3) {
      return <img id={`image${i}`}
        key={i}
        src={project.image}
        alt= {`Project image number ${i + 1}`}
        />
    };
  });
  return( 
    <div className="featuredImages">
      {featuredProjectImages}
    </div>);
}
