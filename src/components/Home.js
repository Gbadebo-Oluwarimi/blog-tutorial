import React from 'react'
import useFetch from '../customhooks/useFetch'
import Bloglist from './Bloglist'
const Home = () => {
  const {data:blogs, isloading, error} = useFetch('http://localhost:4000/blogs');

  return (
    <div className='home'>
      {
        error && <div>{error}</div>
      }
        {isloading && <div>Loading....</div>}
      { 
      blogs && <Bloglist title="All Blogs" blogs={blogs}/>
      }
    </div>
  )
}

export default Home