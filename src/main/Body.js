import React from "react";
import {Switch, Route} from 'react-router-dom';
import Contact from "./body/Contact";
import About from "./body/About";
import Gallery from "./body/Gallery";
import Home from "./body/Home";
import Store from "./body/Store";
import Test from "./body/Test";

function Body(props){
    const bodyStyle = {
        height: "80vh",
        background: "blue"
    }
    return(
      <div style={bodyStyle}>
          <Switch>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/" component={Home}/>
                <Route path="/store" component={Store}/>
                <Route path="/test" component={Test}/>
          </Switch>
      </div>
    )
}

export default Body;
