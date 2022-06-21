import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse d-flex flex-row justify-content-around" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active mx-2">
          <Link className="nav-Link" to="/Home">{props.name}</Link>
        </li>
        <li className="nav-item active mx-2">
          <Link className="nav-Link" to="/GetData">Get_Data</Link>
        </li>
        <li className="nav-item active mx-2">
          <Link className="nav-Link" to="/PostData">Post_Data</Link>
        </li>
        <li className="nav-item active mx-2">
          <Link className="nav-Link" to="/PutData">Put_Data</Link>
        </li>
        <li className="nav-item active mx-2">
          <Link className="nav-Link" to="/DeleteData">Delete_Data</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
