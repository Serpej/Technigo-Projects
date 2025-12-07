import logo from './logo.svg';
import './App.css';
import { HellowWorld } from './Components/HelloWorld';
//import { CountComponent } from './Components/FunctionalComponentWithUseState';
import { ClassCountComponent } from './Components/ClassCountComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HellowWorld/>
      <div className="Img-Container">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" /> 
      </div>
      <ClassCountComponent />
      </header>
    </div>
  );
}

export default App;
