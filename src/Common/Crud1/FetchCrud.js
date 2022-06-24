import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchCrud() {

const[data,setData] = useState([])

useEffect (()=>{
    getdetails()
},[])


const getdetails = () => {
    axios.get("http://localhost:3000/posts").then((resp)=>{
        setData(resp.data)
        // console.log(resp.data)
    }).catch((error)=>error)
}

  return (
  <>
    <div>FetchCrud</div>
{
    data.map((data)=>   (
      <tr>
    <td>{data.id} </td>
    <td>{data.name}</td>
    {/* <td> {data.address.street}</td> */}
    </tr>
    ))
    }
    </>
  )
}
