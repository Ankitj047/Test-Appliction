import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PostCrud() {

const[data,setData] = useState([])
const [name, setName] = useState("")

useEffect (()=>{
    getdetails()
},[])

const getdetails = () => {
    axios.get("http://localhost:3000/posts").then((resp)=>{
        setData(resp.data)
    }).catch((error)=>error)
}

const Postdata = () =>{
  const val = {
    name
  };

  axios.post(`http://localhost:3000/posts`, val)
  .then((resp)=>{
    getdetails()
    // setData(resp.data)
})
.catch((error)=>error)
}

  return (
  <>
    <div>PostCrud</div>
    <input type="text" value={name} onChange={(e)=>setName (e.target.value)} /> Enter Name
    <button onClick={()=>Postdata()} >Post data</button>

    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
{
    data.map((data)=>   (
      <tr>
    <td>{data.id} </td>
    <td>{data.name}</td>
    </tr>
    ))
    }
    </>
  )
}
