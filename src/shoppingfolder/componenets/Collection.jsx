import React, { useState } from 'react'

 
 const Collection = (props) => {
  const {title,image1,image2,image3,image4,image5,image6,price1,price2,price3,price4,price5,price6}=props.gentsdata;
  const [showPrices, setShowPrices] = useState(false);
  
  return (
    <div className='collectionsection'>
      <h2>{title}</h2>
      <button onClick={() => setShowPrices(s => !s)} className='priceToggle'>
        {showPrices ? 'Hide Prices' : 'Show Prices'}
      </button>
      <div className='menImages'>
        <div className='item'>
          <img src={image1} alt='menfashion' />
          {showPrices && <div className='price'>₹{price1}</div>}
        </div>
        <div className='item'>
          <img src={image2} alt='menfashion' />
          {showPrices && <div className='price'>₹{price2}</div>}
        </div>
        <div className='item'>
          <img src={image3} alt='menfashion' />
          {showPrices && <div className='price'>₹{price3}</div>}
        </div>
        <div className='item'>
          <img src={image4} alt='menfashion' />
          {showPrices && <div className='price'>₹{price4}</div>}
        </div>
        <div className='item'>
          <img src={image5} alt='menfashion' />
          {showPrices && <div className='price'>₹{price5}</div>}
        </div>
        <div className='item'>
          <img src={image6} alt='menfashion' />
          {showPrices && <div className='price'>₹{price6}</div>}
        </div>
      </div>
    </div>
  )
 }
 
 export default Collection