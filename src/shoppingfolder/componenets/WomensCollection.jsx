import React from 'react'

const WomensCollection = (props) => {
    const {title,image1,image2,image3,image4,image5,image6}=props.ladiesdata;
  return (
    <div>
        <div className='bannerBox'>
        <img src="assets/LadiesBanner.gif" alt="error loading image"></img>
    </div>
        <h2>WomensCollection</h2>
        <div className='WomensImages'>
          <img src={image1} alt='womenfashion' />
          <img src={image2} alt='womenfashion' />
          <img src={image3} alt='womenfashion' />
          <img src={image4} alt='womenfashion' />
          <img src={image5} alt='womenfashion' />
          <img src={image6} alt='womenfashion' />
        </div>
    </div>
  )
}

export default WomensCollection