import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import { getAllProducts } from "../redux/actions/productActions";
function Homepage() {
  const dispatch = useDispatch();

  const productstate = useSelector((state) => state.getAllProductReducer);

  const { products, error, loading } = productstate;
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      <Filter/>
      <div className="row justify-content-center">
        {loading ? (
          <h1>
            <Loading />
          </h1>
        ) : error ? (
          <h1>
            <Error error="Something Went Wrong!!" />
          </h1>
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-6 col-sm-6 col-lg-4 p-3" key={product._id}>
                <div>
                  <Card product={product} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homepage;
