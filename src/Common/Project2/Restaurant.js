import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Container, Row, Col} from "react-bootstrap";


const uniquList = [
  ...new Set(
    Menu.map((data) => {
      return data.category;
    })
  ),
  "ALL",
];

console.log(uniquList);

export default function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const [Categorylist, setCategorylist] = useState(uniquList);

  const filterData = (category) => {
    if (category == "ALL") {
      return setMenuData(Menu);
    }

    const updateCategory = Menu.filter((data) => {
      return data.category === category;
    });
    setMenuData(updateCategory);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {Categorylist.map((data) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterData(data)}
              >
                {data}
              </button>
            );
          })}
        </div>
      </nav>
      <div class="container">
  <div className="row">
  <div className="col-12" style={{display:"contents"}} >
      {menuData.map((data) => {
        const { id, name, category, image, description } = data;
        return (
          <>     
          <div className="col-4"  >      
              <Card style={{height:"700px", margin:'10px'}} >
                <Card.Body>
                  <span className="card-number card-circle subtle">{id}</span>
                  <Card.Subtitle style={{ "color": "red" , "text-transform": "uppercase", "marginTop":"10px"}}>
                    {category}
                  </Card.Subtitle>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <div className="card-read">Read</div>
                  <Card.Img src={image} alt="images" />
                  <span className="card-tag subtle " style={{"margin-left":"10px"}} >Order Now</span>
                  <span className="card-tag subtle ">{data.price}</span>
                </Card.Body>
              </Card>
              </div>
          </>
        );
        
      })}
      </div>
      </div>
      </div>
    </>
  );
}
