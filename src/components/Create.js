import React from 'react'
import {useState} from 'react'

export const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('rimi');

  const submit = (e) => {
      e.preventDefault();
      const blog = {title, body, author};
      fetch('http://localhost:4000/blogs', {
        method:'POST',
        headers:{'content-Type':'Application/json'},
        body:JSON.stringify(blog)
      }).then(() => {
        console.log('new blog added');
      })
  }

  return (
    <div className='create'>
        <h2>Add a new blog</h2>
        <form onSubmit={submit}>
          <label>Blog Title:</label>
          <input 
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          />
           <label>Blog body:</label>
         <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>
         <label>Blog author</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="rimi">rimi</option>
            <option value="ife">ife</option>
          </select>
          <button>Add blog</button>
        </form>
    </div>
  )
}
