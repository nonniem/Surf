import React from "react";
import Footer from "./Footer";
import Header from './Header';
import Body from './Body';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App;
