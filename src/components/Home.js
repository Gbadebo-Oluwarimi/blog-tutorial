import React from 'react'
import { useState } from 'react'
import Bloglist from './Bloglist'
const Home = () => {
    const [blogs, setBlogs] = useState([
    { title:"Then he was it", author:"Ben Lawson", id:1},
    { title:"Financial Stability", author:"Judgse ruth", id:2},
    { title:"The transport system", author:"Abdul Mohammed", id:3},
    ])

    const handledelete = (id) => {
        const newblogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newblogs);
    }
  return (
    <div className='home'>
       <Bloglist title="All Blogs" blogs={blogs} handledelete={handledelete}/>
    </div>
  )
}

export default Home