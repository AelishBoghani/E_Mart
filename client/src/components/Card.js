import React, { useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { addToCart } from "../redux/actions/cartActions";
import AOS from "aos";
import "aos/dist/aos.css";
function Card({ product }) {
  AOS.init();
  const [quantity, setQuantity] = useState(1);
  const [varient, setvarient] = useState("_4GB");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addTocart() {
    dispatch(addToCart(product, quantity, varient));
  }
  return (
    <div
      data-aos="zoom-in"
      style={{ margin: "45px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{product.name}</h1>
        <img src={product.image} alt="image" className="img-fluid topimg" />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setvarient(e.target.value)}
          >
            {product.varients.map((varient) => {
              return <option value={varient}> {varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Colour</p>
          {product.description}
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2">
            Price : {product.prices[0][varient] * quantity} RS/-{" "}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addTocart}>
            Add To Cart
          </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={product.image}
            alt="image"
            className="rounded mx-auto d-block"
          />
          <p>{product.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            {" "}
            Close{" "}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Card;
