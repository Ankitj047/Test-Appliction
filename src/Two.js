import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Two() {

    const[post,setPost] = useState();

const baseUrl = "https://jsonplaceholder.typicode.com/posts"

    useEffect(()=>{
        axios.get(`${baseUrl}/1`).then((resp)=>{
            setPost(resp.data);
        })
    },[]);
    



function createPost(){
axios.post(baseUrl,{
  title: "hello I am",
  body: "This is a new post"
}).then((resp)=>{
  setPost(resp.data);
})
};

if (!post) return "No Post";

return (
<>
<h1>{post.title}</h1>
<p>{post.body}</p>
<button onClick={createPost} >create</button>
</>
  )
}
