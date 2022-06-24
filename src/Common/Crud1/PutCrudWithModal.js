import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function PutCrudWithModal() {
  const [data, setData] = useState([]);
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const myEdit = (id) => {
    let _newValue = {
      name: "Mustafa",
    };
    axios
      .put(`http://localhost:3000/posts/${id}`, _newValue)
      .then((resp) => {
        getdetails();
      })
      .catch((error) => error);
  };

  const [inputField , setInputField] = useState({
    first_name: '',
})

const inputsHandler = (e) =>{
    setInputField( {[e.target.name]: e.target.value} )
}

const submitButton = () =>{
    alert(inputField.first_name)
}
  
  return (
    <>
      <div>PutCrudWithModal</div>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Function</th>
      </tr>
      {data.map((data, index) => (
        <tr>
          <td>{index + 1} </td>
          <td>{data.name}</td>
          <td>
            {" "}
            <Button onClick={handleShow}>
              ForEdit
            </Button>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Please Fill Form for the Update</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div style={{"margin":"10px"}}>
            <input style={{"margin":"10px"}}
            type="text" 
            name="first_name" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.first_name}/>

            <button onClick={submitButton}>Submit Now</button>
        </div>

                <button className="btn-danger" onClick={() => myEdit(data.id)}>
                  Edit
                </button>

              </Modal.Body>
              <Modal.Footer><Button variant="secondary" onClick={handleClose}>{" "}Close{" "}</Button></Modal.Footer>
            </Modal>
          </td>
        </tr>
      ))}
    </>
  );
}
