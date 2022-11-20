import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flexBox'>
      <div className='logo'>
        <Link to="/"><img src='Images/crypto_logo-removebg-preview.png' alt='logo'/></Link>
      </div>
      <div className='links'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/coins">Coins</Link></li>
          <li><Link to="/exchange">Exchange</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header