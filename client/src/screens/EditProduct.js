import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import { editProduct, getProductById } from "../redux/actions/productActions";

function EditPizza({ match }) {
  const [name, setName] = useState("");
  const [smallprice, setSmallPrice] = useState();
  const [mediumprice, setMediumPrice] = useState();
  const [largeprice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const getproductbyidstate = useSelector((state) => state.getProductByIdReducer);
  const { pizza, error, loading } = getproductbyidstate;
  const editproductstate = useSelector((state) => state.editProductReducer);
  const { editloading, editerror, editsuccess } = editproductstate;
  useEffect(() => {
    if (pizza) {
      if (pizza._id == match.params.productid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setSmallPrice(pizza.prices[0]["_4GB"]);
        setMediumPrice(pizza.prices[0]["_8GB"]);
        setLargePrice(pizza.prices[0]["_16GB"]);
        setImage(pizza.image);
       
      } else {
        dispatch(getProductById(match.params.productid));
      }
    } else {
        dispatch(getProductById(match.params.productid));
    }
  }, [pizza, dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedproduct= {
      _id: match.params.productid,
      name,
      image,
      description,
      category,
      prices: {
        _4GB : smallprice,
        _8GB: mediumprice,
        _16GB: largeprice,
      },
    };
    dispatch(editProduct(editedproduct));
  }
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Edit Product</h1>
      <div>
        {loading && (<Loading />)}
        {error && (<Error error="Something Went Wrong" />)}
        {editsuccess && (
          <Success success="Prouct details Edited Successfully!!" />
        )}
        {editloading && (<Loading />)}
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
            EDIT PRODUCT
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPizza;