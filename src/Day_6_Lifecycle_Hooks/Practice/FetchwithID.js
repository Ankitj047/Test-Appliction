import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function FetchwithID() {

  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [selectedPost, setSelectedPost] = useState('')


  useEffect(() => {
    getPostDetails()
  }, [])


  const getPostDetails = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(resp => {
        setPosts(resp.data)
      })
      .catch(error => error)
  }

  const onCheckID = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setSelectedPost(res?.data)
        }
      })
      .catch(err => {
      console.log(err);
    })
  }
  return (
    <>
      <div>FetchwithID <br></br>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={onCheckID} >Please enter ID</button>
        <button onClick={() => setSelectedPost('')} >Reset</button>
        {selectedPost !== '' ? <div>
          <h1>Post Details</h1>
          <p>{selectedPost.title}</p>
          <p>{selectedPost.body}</p>
        </div> : null}
      </div>
    </>
  )
}
