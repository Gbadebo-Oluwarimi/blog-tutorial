import React from 'react'
import { useState, useEffect } from 'react'
import Bloglist from './Bloglist'
const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isloading, setIsloading] = useState(true);
    const getblogs = async() => {
      try{
        const api = await fetch('http://localhost:4000/blogs');
        if(!api.ok){
          throw Error('could not fetch the data')
        }
        const response = await api.json();
        setBlogs(response);
        setIsloading(false)
      }
      catch(error){
        console.log(error.message)
      }
    }
    useEffect(() => {
      
        getblogs();
     
       
    }, [])

  
  return (
    <div className='home'>
        {isloading && <div>Loading....</div>}
      { 
      blogs && <Bloglist title="All Blogs" blogs={blogs}/>
      }
    </div>
  )
}

export default Home