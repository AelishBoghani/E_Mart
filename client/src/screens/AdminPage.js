import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import OrdersList from "./OrdersList";
import "./pagesStyle.css";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import UsersList from "./UsersList";
import EditProduct from "./EditProduct";

function AdminPage() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h1>Admin Panel</h1>
          <ul className="adminfunction">
            <li>
              <Link to={"/admin/userslist"}>Users List</Link>
            </li>
            <li>
              <Link to={"/admin/productlist"}>Product List</Link>
            </li>
            <li>
              <Link to={"/admin/addproduct"}>Add New Product</Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"}>Orders List</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/admin" component={UsersList} exact />
            <Route path="/admin/userslist" component={UsersList} exact />
            <Route path="/admin/orderslist" component={OrdersList} exact />
            <Route path="/admin/productlist" component={ProductList} exact />
            <Route path="/admin/addproduct" component={AddProduct} exact />
            <Route path="/admin/editproduct/:productid" component={EditProduct} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
