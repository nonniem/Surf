import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){

return(
    <div>
      <div className='navBar'>
        <Link to="./" className="navBarlinks">Home</Link>
        <Link to="./about" className='navBarlinks'>About</Link>
        <Link to="./contact" className='navBarlinks'>Contact</Link>
        <Link to="./gallery" className='navBarlinks'>Gallery</Link>
        <Link to="./store" className='navBarlinks'>Store</Link>
        <Link to="./test" className='navBarlinks'>Test</Link>
      </div>
    </div>
  )}

export default Header;
