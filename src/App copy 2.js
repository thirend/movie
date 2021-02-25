import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('Start');
  }
  componentDidMount(){
    console.log('componentRendered');
  }
  componentDidCatch(){
    console.log('Catch');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
componentDidUpdate(){
  console.log('componentDidUpdate.');
}


  state = {
    count: 0,
  };

  add = () => {
    console.log("add");
    this.setState({ count: this.state.count + 1 });
  };

  minus = () => {
    console.log("minus");
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    console.log("Reset");
    this.setState({ count: 0 });
  };

  render() {
    console.log('Render')
    return (
      <div>
        <h1> The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
