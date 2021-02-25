import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Start");
  }

  state = {
    isLoading: true,
    currentTime:0,
    movie:[],
  };

  componentDidMount() {
    setTimeout( ()=> {
      this.setState({isLoading: false});
    },2003);
    setTimeout( () => {
      console.log('settime');
      this.setState({isLoading:true});

    },4010);

  setInterval( () => {
    console.log('Update time...');
    this.setState({currentTime:new Date().toLocaleTimeString() })
    },1000);
  }

  render() {
    const {isLoading} = this.state;
     let {time} = this.state.currentTime;

    return <div>
      <h1> {isLoading ? "Loading..." : "We are ready"} </h1>
      <h3>{time} </h3>
      </div>;
  }
}

export default App;
