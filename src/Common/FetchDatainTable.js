import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchDatainTable() {

    const [data, setData] = useState([])
    const [id, setId] = useState()


    useEffect(() => {
        CheckID()
    }, [])

    const CheckID = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(resp => {
            setData(resp.data)
        }).catch((error) => ("error", error))
    }

    return (
        <>
            <div>FetchDatainTable</div>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={CheckID} >Please enter ID</button>
            <table>
                <tr>
                    <td>name</td>
                    <td>username</td>
                </tr>

                {
                    data.map((users) =>
                    (
                        <tr key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            
                        </tr>
                    ))
                }
            </table>
        </>
    )
}
