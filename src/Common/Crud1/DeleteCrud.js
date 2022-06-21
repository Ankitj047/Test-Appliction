import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DeleteCrud() {

const[data,setData] = useState([])

useEffect (()=>{
    getdetails()
},[])

const getdetails = () => {
    axios.get("http://localhost:3000/posts").then((resp)=>{
        setData(resp.data)
    }).catch((error)=>error)
}

const myDelete = (element) =>{
  let ID;
  ID = element.id;
  axios.delete(`http://localhost:3000/posts/${ID}`)
  .then((resp)=>{
    getdetails()
  })
  .catch((error)=>error)
}

  return (
  <>
    <div>DeleteCrud</div>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Function</th>
    </tr>
{
    data.map((data,index)=>   (
      <tr>
    <td>{data.id} </td>
    <td>{data.name}</td>
    <td> <button className="btn-danger"
                onClick={() => myDelete(index)}>Delete</button></td>
    </tr>
    ))
    }
    </>
  )
}
