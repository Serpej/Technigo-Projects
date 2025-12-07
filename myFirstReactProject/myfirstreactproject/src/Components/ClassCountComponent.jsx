import { Component } from "react";

// Define a class component that extends React.Component or React.PureComponent
export class ClassCountComponent extends Component {
  
  // Define constructor if necessary
  constructor (props) {
    super(props);
    
    // Initialize state if needed
    this.state = {
      count: 0
    };
  };

  // Define lifecycle methods if necessary
  componentDidMount() {
    console.log("Component mounted");
  };

  // Define instance methods if necessary
  handleClick = () => {
    this.setState({count: this.state.count + 1});
  };
  
  componentDidUpdate() {
    console.log("Component updated");
  };

  // Define render() method to return JSX
  render() {
    return (
<div>
  <p>Count: {this.state.count}</p>
  <button onClick={this.handleClick}>Increment</button>
</div>
    )
  };
};