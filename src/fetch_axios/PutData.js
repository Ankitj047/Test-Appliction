import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UpdateData() {
  const [info, setInfo] = useState([])
  // const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ind, setInd] = useState();
  console.log("Index",ind);
  
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

  function selectUser(idx) {
    let item1 = info[idx];
    console.log(info[idx]);
    setTitle(item1.title)
    setAuthor(item1.author);
    setInd(idx);
    
  }
  
  const result = info.map((data,index)=>{
    return(
      <>
        <tr>
            <td style={{border:'1px solid black'}}>{index+1}</td>
            <td style={{border:'1px solid black'}}>{data.title}</td>
            <td style={{border:'1px solid black'}}>{data.author}</td>
            <td style={{border:'1px solid black'}}><button 
            onClick={() => selectUser(index)}>Update</button></td>
          </tr>
        </>
    )})

  const putData = () => {
    let data = {
      title, author
    }
    console.log("Index",ind);
    let ID;
    info.forEach((element, index) => {
      if (ind === index) {
        console.log(element.id);
        ID = element.id;
      }
    })
    axios.put(`http://localhost:3001/posts/${ID}`, data)
      .then(response => {
        console.log("data posted into json file", response.data);
      })
      .catch(error => {
        console.log("ERROR ==>", error);
      })
    getUsers()
  }

  return (
    <>
    <form>
        <div className="container">
            <h5 className="d-inline-block">POST request using axios</h5>
            <div className="form-group">
                <label htmlFor="title">Enter Book Name here</label>
                <input type="text" className="form-control" id="title1" value={title}
                onChange={e => setTitle(e.target.value)} />
                <label htmlFor="author" className="">Enter Book Author here</label>
                <input type="text" className="form-control" id="author1" value={author} 
                onChange={e => setAuthor(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-warning" onClick={putData}>Submit</button>
        </div >
    </form>
        <table className="table table-striped mt-2">
            <thead style={{ border: '1px solid black' }}>
                <tr>
                    <th style={{border:'1px solid black'}}>ID</th>
                    <th style={{border:'1px solid black'}}>Title</th>
                    <th style={{border:'1px solid black'}}>Author</th>
                    <th style={{border:'1px solid black'}}>Put Data</th>
                </tr>
            </thead>
            <tbody>
            {result}
            </tbody>
        </table>
    </>
)
}
export default UpdateData;