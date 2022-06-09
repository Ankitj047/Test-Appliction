import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Fetch() {

    const [posts, setPosts] = useState([])


useEffect(() => {
    getPostDetails ()
}, [])


const getPostDetails = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(resp=>{
        setPosts(resp.data)})
    .catch(error=>error)
}

  return (
    <div>FetchData
                {
          posts.map(post => <li>{post.title}</li>)
        }
    </div>
  )
}
