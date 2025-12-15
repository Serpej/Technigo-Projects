import { HeaderImages } from "./HeaderImages";



export const Header = () => {
  return (
    <div className="headerContainer">
      <h3>Hi there I'm</h3>
      <h1>Jespers Hagerman Borgström</h1>
      <h3>Frontend Developer with a Background in Social Work & Garden Engineering</h3>
      <HeaderImages />
      <h1>Bio</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}