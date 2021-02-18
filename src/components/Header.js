import React from 'react'

import Banner from '../images/TilesBig.png'

const Header = (props) => {
  return (
    <div className='Header-wrapper'>
      <img src={Banner} />
      <div className='title-wrapper'>
        <div className='title'>
          Cinderela Bugada
        </div>
      </div>
    </div>
  )
}

export default Header
