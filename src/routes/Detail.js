import React from "react";

function Detail1(props) {
  console.log(props);
  if (props.location.state) {
    return (
      <span>
        <h3>{props.location.state.year}</h3>
        <h2>{props.location.state.title}</h2>
        <img src={props.location.state.poster} />
      </span>
    );
  } else {
    return ".";
  }
}

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
      const{location }=this.props;
      if(location.state){
        return (
            <span>
              <h3>{this.props.location.state.year}</h3>
              <h2>{this.props.location.state.title}</h2>
              <img src={this.props.location.state.poster} />
            </span>
          );
      }
      else{
          return null;
      }
  }
}

export default Detail;
