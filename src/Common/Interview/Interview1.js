import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Interview1() {

const[data,setData] = useState([])

useEffect(()=>{

    axios.get("https://api.dailysmarty.com/posts").then((resp)=>{
        setData(resp.data.posts)
        console.log(resp.data.posts)
    }).catch((error)=>error)
},[])

return (
    <>
    <div>Interview1</div>
    <th>
        <td>title</td>
    </th>
    {console.log(data)}
    {
data.length && data.map((data)=>{
{console.log(data)}
return(
<tr>
        <td>{data.id}</td>
    </tr>)
})
    }
    </>
  )
}
