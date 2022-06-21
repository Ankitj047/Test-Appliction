import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetData = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios.get('http://localhost:3001/posts', { headers })
      .then(response => {
        console.log("Data-->", response);
        setDetails(response.data);
      })
      .catch(error => {
        console.log("error-->", error);
      })
  },[])

  const info =details.map((data,index)=>{
    return(
        <tr>
            <td style={{border:'1px solid black'}}>{index+1}</td>
            <td style={{border:'1px solid black'}}>{data.title}</td>
            <td style={{border:'1px solid black'}}>{data.author}</td>
        </tr>
    )
})

  return (
    <table className="table table-striped mt-2">
    <thead style={{border:'1px solid black'}}>
    <tr>
        <th style={{border:'1px solid black'}}>ID</th>
        <th style={{border:'1px solid black'}}>Title</th>
        <th style={{border:'1px solid black'}}>Author</th>
    </tr>
    </thead>
    <tbody>
    {info}
    </tbody>
</table>
 )    
};
export default GetData
