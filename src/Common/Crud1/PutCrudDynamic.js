import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PutCrudDynamic() {
  const [data, setData] = useState([]);
  const [name,setName] = useState()

  useEffect(() => {
    getdetails();
  }, []);

  const getdetails = () => {
    axios
      .get("http://localhost:3000/posts")
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => error);
  };

  // const myEdit = (id) => {
  //   let _newValue = {
  //     name: "Mustafa",
  //   };
  //   axios
  //     .put(`http://localhost:3000/posts/${id}`, _newValue)
  //     .then((resp) => {
  //       getdetails();
  //     })
  //     .catch((error) => error);
  // };

  const myEdit = (id) => {
    let _newValue = {
      name,
    };
    axios
      .put(`http://localhost:3000/posts/${id}`, _newValue)
      .then((resp) => {
        getdetails();
      })
      .catch((error) => error);
  };

  return (
    <>
      <div>PutCrudDynamic</div>
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} /> PuData
      <button onClick={()=>myEdit()} >Edit Data</button>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Function</th>
      </tr>
      {data.map((data, index) => (
        <tr>
          <td>{index + 1} </td>
          <td>{data.name}</td>
          <td>{" "}
            <button className="btn-danger" onClick={() => myEdit(data.id)}>Edit</button>
          </td>
        </tr>
      ))}
    </>
  );
}
