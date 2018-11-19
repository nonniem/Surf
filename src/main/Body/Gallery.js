import React from 'react';
import tbag from './media/tbag.jpg';
import witt from './media/witt.jpg';
import chris from './media/siani.jpg';

function Gallery(){
  return(
    <div>
      <h2>lotza pictures in hur</h2>
      <img src={tbag} alt='' width='250px' height='200px' style={{padding:'20px'}}></img>
      <img src={witt} alt='' width='250px' height='200px' style={{padding:'20px'}}></img>
      <img src={chris} alt='' width='250px' height='200px' style={{padding:'20px'}}></img>
    </div>
  )}

export default Gallery;
