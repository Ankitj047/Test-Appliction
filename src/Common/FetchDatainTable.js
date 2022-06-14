import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchDatainTable() {

    const [data, setData] = useState([])
    const [id, setId] = useState()

    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(resp => {
            setData(resp.data)
        }).catch((error) => ("error", error))
    }



const CheckID = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users/"+id).then(resp => {
        setData(resp.data)
    }).catch((error) => ("error", error))
}

    return (
        <>
            <div>FetchDatainTable</div>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={CheckID} >Please enter ID</button>
            <table style={{border: "1px", borderStyle: "solid"}} >
                <tr>
                    <td>name</td>
                    <td>username</td>
                    <td>Email</td>
                    <td>Adress</td>
                </tr>

                {
                  
                        <tr key={data.id}>
                        
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        {/* <td>{data.company.name}</td> */}
                        </tr>
                
                }
            </table>
        </>
    )
}
