import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='left'>
            <div className='title'>
                <h5>KLU SHOPPING MALL</h5>
            </div>
        </div>
        <div className='center'>
            <ul>
                <li>Womans</li>
                <li>Mens</li>
                <li>Kids</li>
                <li>Watches</li>
                <li>beauty</li>
            </ul>

        </div>

        <div className='search'>
            <input type='text' placeholder='search here'/>

        </div>

        <div className='right'>
            <div className='signin'>
                SignIn/Signup
            </div>
            <div className='cart'>
                Cart
            </div>
        </div>

    </div>
  )
}

export default Header