import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/actions/productActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [smallprice, setSmallPrice] = useState();
  const [mediumprice, setMediumPrice] = useState();
  const [largeprice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch()

  const addproductstate=useSelector(state=>state.addProductReducer)
  const { success, error, loading } = addproductstate;


  function formHandler(e) {
    e.preventDefault();

    const product = {
      name,
      image,
      description,
      category,
      prices: {
        _4GB: smallprice,
        _8GB: mediumprice,
        _16GB: largeprice,
      },
    };
    console.log(product);
    dispatch(addProduct(product))
  }
  return (
    <div>
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Add Product</h1>
        {loading && (<Loading/>)}
          {success && (<Success success='New Product Added Successfully!!'/>)}
          {error && (<Error error='Something Went Wrong' />)}
        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="4GB Varient Price"
            value={smallprice}
            onChange={(e) => setSmallPrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="8GB Varient Price"
            value={mediumprice}
            onChange={(e) => setMediumPrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="16GB Varient Price"
            value={largeprice}
            onChange={(e) => setLargePrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="btn m-3" type="submit">
            {" "}
            ADD Product
          </button>
        </form>
      </div>
    </div>
  );
}
