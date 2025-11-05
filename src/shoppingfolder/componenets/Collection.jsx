 import React from 'react'

 
 const Collection = (props) => {
  const {title,image1,image2,image3,image4,image5,image6,price1,price2,price3,price4,price5,price6}=props.gentsdata;
   return (
     <div className='collectionsection'>
      <h2>{title}</h2>
      <div className='menImages'>
      <img src={image1} alt='menfashion' />
      <img src={image2} alt='menfashion' />

      <img src={image3} alt='menfashion' />
  
      <img src={image4} alt='menfashion' />
 
      <img src={image5} alt='menfashion' />
 
      <img src={image6} alt='menfashion' />

     </div>
     </div>
   )
 }
 
 export default Collection