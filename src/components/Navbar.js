import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Bloog</h1>
        <div className='links'>
            <a href='/'>Home</a>
            <a href='/Create' style={{backgroundColor:'#f1356d', borderRadius:'4px', color:'#fff'}}>New Blog</a>
        </div>
    </nav>
  )
}

export default Navbar