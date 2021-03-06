import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/actions/productActions";
import './Card.css'

function Filter() {
  const dispatch = useDispatch();
  const [searchKey,setSearchKey]=useState('');
  const [category,setCategory]=useState('all');
  return (
    <div className="container">
      <div className="row justify-content-center filter shadow-lg p-3 mb-5 bg-white rounded ">
        <div className="col-md-3">
          <input
            type="text"
            value={searchKey}
            onChange={(e)=>{setSearchKey(e.target.value)}}
            className="form-control w-100"
            placeholder="Search Product"
          />
        </div>
        <div className="col-md-2">
          <button className="btn mt-2 w-100" onClick={()=>{dispatch(filterProducts(searchKey,category))}}>Filter</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
