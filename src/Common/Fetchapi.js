import React from 'react'
import {useEffect,useState} from 'react'


export default function Fetchapi() {
const [data,setData]=useState([])


    useEffect(()=>{
        fetch('http://localhost:3000/emp').then((result)=>{
            result.json().then((resp)=>{
                // console.log("result",resp)
                setData(resp)
            })
        })
    },[])
console.log (data)
    
  return (
<div>
    <table>
        <tr>
            <td>ID</td>
            <td>name</td>
            <td>lastName</td>
        </tr>
    </table>
{/* <button onClick={addbtn} >add</button> */}
{
    data.map((item)=>
    <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
        </tr>
    )
}
</div>  )
}
