import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function One() {

  const[post,setPost] = useState();

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((resp)=>{
      setPost(resp.data)
    })
  })

if(!post) return null;

  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </>
  )
}
