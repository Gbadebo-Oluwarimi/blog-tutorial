import React from 'react'
import { useParams } from 'react-router-dom'

const Blogdetails = () => {
    const {id} =useParams();
  return (
    <div className='blog-details'>
        <h2>Blog Details - {id}</h2>
    </div>
  )
}

export default Blogdetails