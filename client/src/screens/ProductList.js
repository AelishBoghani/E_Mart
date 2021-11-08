import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { deleteProduct, getAllProducts } from "../redux/actions/productActions";
import "./pagesStyle.css";

function ProductList() {
  const dispatch = useDispatch();

  const productstate = useSelector((state) => state.getAllProductReducer);

  const { products, error, loading } = productstate;
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="justify-content-center">
      
      {loading && <Loading />}
      {error && <Error error="Something  Went Wrong" />}
      <table className="table  table-striped table-dark table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            {/* <th>Category</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>
                    4GB : {product.prices[0]["_4GB"]}
                    <br />
                    8GB : {product.prices[0]["_8GB"]}
                    <br />
                    16GB : {product.prices[0]["_16GB"]}
                  </td>
                  <td>
                    <i className="fa fa-trash m-2" onClick={()=>{dispatch(deleteProduct(product._id))}} />
                    <Link to={`/admin/editproduct/${product._id}`}>
                      <i className="fa fa-edit m-2" />
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
