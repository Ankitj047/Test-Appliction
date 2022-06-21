import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DeleteData = () => {
    const [info, setInfo] = useState([])
    //const [id, setId] = useState(0)

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        axios.get(`http://localhost:3001/posts`)
          .then(response => {
            console.log(response.data)
            setInfo(response.data)
          })
    }

    const result = info.map((data,index) => {
        return (
            <tr>
                <td style={{ border: '1px solid black' }}>{index + 1}</td>
                <td style={{ border: '1px solid black' }}>{data.title}</td>
                <td style={{ border: '1px solid black' }}>{data.author}</td>
                <td style={{ border: '1px solid black' }}> <button className="btn-danger"
                onClick={() => myDelete(index)}>Delete</button></td>
            </tr>
        );
    })

    function myDelete(idx) {
        let ID;
        info.forEach((element, index) => {
            if (idx === index) {
                console.log(element.id);
                ID = element.id;
            }
        })
        axios.delete(`http://localhost:3001/posts/${ID}`)
            .then(res => {
                console.log('one data deleted', res)
                getUsers()
            })
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <table className="table table-striped mt-2">
                <thead style={{ border: '1px solid black', width: '200px' }}>
                    <tr>
                        <th style={{ border: '1px solid black' }}>ID</th>
                        <th style={{ border: '1px solid black' }}>Title</th>
                        <th style={{ border: '1px solid black' }}>Author</th>
                        <th style={{ border: '1px solid black' }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {result}    
                </tbody>
            </table>
            <form>
                <button className="btn btn-primary my-3" onClick={refreshPage}>Refresh Page</button>
            </form>
        </>
    )

}
export default DeleteData