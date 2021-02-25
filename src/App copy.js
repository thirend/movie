import { React } from "react";
import PropTypes from "prop-types";


const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://allshecooks.com/wp-content/uploads/2016/08/Kimchi.jpg",
    rating:2.9,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://img.insight.co.kr/static/2019/09/09/700/pk6929eu9on2dho89326.jpg",
      rating:5.0,
  },
  {
    id:3,
    name: "Doncasu",
    image: "https://img.siksinhot.com/place/1527008049013673.jpg",
  },
];

function Food({name, picture,rating})
{
  console.log(name);
  return (
    <div>
      <h3>I love {name}</h3> 
      <h4>{rating}/5.0</h4>
      <img src={picture} width="30%" alt={name} />
    </div>
  );
}

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>;
}


function App2() {
  // return <div className="App" />;
  return (
    <div>
      {foodILike.map(renderFood)
      }
      <br/>
      <hr/>
    </div>
  );

    }

Food.propTypes ={
  name : PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App2;
