import axios from "axios";
import React, { useEffect, useState } from "react";
import './FetchDatainTable.css'


export default function FetchDatainTable() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => ("error", error));
  };

  const CheckID = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => ("error", error));
  };

  return (
    <>
      <div>FetchDatainTable</div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={CheckID}>Please enter ID</button>
      <table style={{ borderWidth: "1px", borderStyle: "solid" }}>
        <tbody>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>Email</th>
          <th>Adress</th>
          <th>Geo lat Location</th>
        </tr>
        {console.log(data)}

        {
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data?.address?.street}</td>
            <td>{data?.address?.geo?.lat}</td>
          </tr>
        }
        </tbody>
      </table>
    </>
  );
}
