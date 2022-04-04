import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Bloog</h1>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/Create' style={{backgroundColor:'#f1356d', borderRadius:'4px', color:'#fff'}}>New Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar