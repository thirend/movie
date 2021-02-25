import React from "react";

class MovieClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Start Movies Component");
  }


  render() {
    return <div>movies { this.props.name}</div>;
  }
}


export default MovieClass;
