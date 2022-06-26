import React, { useState } from "react";
import "./Cart.css";
import { Products } from "./Product";

export default function Cart() {

const[items, setitems] = useState([])

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="../images/arrow.jpg" alt="arrow" className="arrow-icon" />
          <h3>Continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img
            src="data:image/png;base64,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"
            alt="cart"
          />
          <p>7</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">7</span> items in
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            
{
    Products.map((data)=>{
        return(
            <>
            <div className="items-info">
            <div className="product-img">
            <img src={data.img}  alt="image"/>
          </div>
          <div className="title">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
          <div className="add-minus-quantity">
            <i className="fas fa-minus minus"></i>
            <input type="text" placeholder="quantity" disabled />
            <i className="fas fa-plus add"></i>
          </div>
          <div className="price">
            <h3>{data.price}</h3>
          </div>
          <div className="remove-item">
            <i className="fas fa-trash-alt remove"></i>
          </div>
          </div>
            </>
        )
    })
}
            {/* <hr style={{ backgroundColor: "black" }} /> */}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Card Total: <span>2000rs</span>
          </h3>
          <button>CheckOut</button>
        </div>
      </section>
    </>
  );
}
