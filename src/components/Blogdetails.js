import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customhooks/useFetch';

const Blogdetails = () => {
    const {id} =useParams();
    const {data:blog, isloading, error} = useFetch(`http://localhost:4000/blogs/${id}`);
  return (
    <div className='blog-details'>
        {
            isloading && <div>Loading.....</div>
        }
        {
            error && <div>{error}</div>
        }
        {
            blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )
        }
       
    </div>
  )
}

export default Blogdetails