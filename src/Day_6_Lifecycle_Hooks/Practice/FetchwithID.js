import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function FetchwithID() {

    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)

useEffect(() => {
    getPostDetails ()
}, [])


const getPostDetails = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(resp=>{
        setPosts(resp.data)})
    .catch(error=>error)
}

const onCheckID = ()=>{

}

  return (
    <>
    <div>FetchwithID <br></br>
    <input type="number" value="number" />
      <button onClick={()=>onCheckID} >Please enter ID</button>
        {
          posts.map(post => <li>{post.title}</li>)
        }
    </div>
    </>
  )
}
