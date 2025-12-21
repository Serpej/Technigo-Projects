import { Bio } from "./Bio";
import { HeaderImages } from "./HeaderImages";



export const Header = () => {
  return (
    <div className="headerContainer">
      <h3>Hi there I'm</h3>
      <h1>Jesper Hagerman Borgström</h1>
      <h3>Frontend Developer with a Background in Social Work & Garden Engineering</h3>
      <HeaderImages />
      <Bio />
    </div>
  );
}