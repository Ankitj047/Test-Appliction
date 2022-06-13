import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchDatainTable() {

const [data,setData]= useState([])

useEffect (()=>{
    getData ()
},[])

const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(resp=>{
        setData(resp.data)
    }).catch((error)=>("error",error))
} 

  return (
      <>
    <div>FetchDatainTable</div>
    <table>
<tr>
    <td>name</td>
    <td>username</td>
</tr>
    
{
    data.map((users)=>
   (
<tr> 
   <td>{users.name}</td>
<td>{users.username}</td> 
</tr>
)   )
}
</table>
    </>
  )
}
