import React from 'react';
import {Switch, Route} from "react-router-dom";
import Contact from './Body/Contact';
import About from './Body/About';
import Gallery from './Body/Gallery';
import Home from './Body/Home';
import Store from './Body/Store';
import Test from './Body/Test';

function Body(props){
    const bodyStyle = {
        height: '80vh',
        background: 'blue'
    }

    return(
      <div style={bodyStyle}>
          <Switch>
                <Route path='/Contact' component={Contact}/>
                <Route path='/About' component={About}/>
                <Route path='/Gallery' component={Gallery}/>
                <Route path='/' component={Home}/>
                <Route path='/Store' component={Store}/>
                <Route path='/Test' component={Test}/>
          </Switch>
      </div>
    )
}

export default Body;
