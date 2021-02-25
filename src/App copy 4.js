import React from 'react';
import axios from 'axios';
import MovieClass from './components/movieClass';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('Start');

  }

  state = {
    isLoading:true,
    movies:[],

  }

componentDidMount()
{
  this.getMovies();
}
getMovies= async ()=>{
  const {
    data:{
      data:{movies},
    },
  } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
  console.log(movies);
  //this.setState({movies:movies});
  this.setState({movies, isLoading:false});
}


render(){

  const {isLoading} = this.state;

  return (
  <div>
   {isLoading? 'Loading...':'We are Ready'} 
  <MovieClass name="ttt"/>
  </div>)
  ;
}



}


export default App;