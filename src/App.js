import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Naviation from "./components/Navigation"
import Detail from './routes/Detail';
function App() {
  return (
    <HashRouter>
      <Naviation></Naviation>
      <Route path="/" exact={true} component={Home} />

      <Route path="/about"   component={About} />
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  );
}

export default App;
