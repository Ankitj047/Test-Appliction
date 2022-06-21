import React, { useState, useEffect } from "react";
import axios from "axios";

const PostData = () => {
  const [info, setInfo] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [count,setCount]=useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts`)
      .then((response) => {
        console.log(response);
        setInfo(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  //   const[stud,setstud]=useState([]);

  const result = info.map((data,index)=>{
    return(
        <tr>
            <td style={{border:'1px solid black'}}>{index+1}</td>
            <td style={{border:'1px solid black'}}>{data.title}</td>
            <td style={{border:'1px solid black'}}>{data.author}</td>
        </tr>
    )})

  const postData = () => {
    const val = {
      title,
      author,
    };
    if (title === "" && author === "") {
      alert("Fields are required");
      count=2;
      
    } else {
      info.forEach((data) => {
        if (data.title === title && data.author === author) {
          alert("Record already exist in db");
          count=2;
        }
      });
    }
    if(count!==2){
      axios
        .post(`http://localhost:3001/posts`, val)
        .then((response) => {
          console.log(response.data);
          setInfo(response.data);

        })
        .catch((error) => console.log(error));
    }

  };

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
            <button type="submit" className="btn btn-warning" onClick={postData}>Submit</button>
        </div >
      </form>
        <table className="table table-striped mt-2">
            <thead>
                <tr>
                    <th style={{border:'1px solid black'}}>ID</th>
                    <th style={{border:'1px solid black'}}>Title</th>
                    <th style={{border:'1px solid black'}}>Author</th>
                </tr>
            </thead>
            <tbody>
            {result}
            </tbody>
        </table>
    </>
)

};

export default PostData;
