import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit, FaPlus } from "react-icons/fa";
import { viewProduct, deleteProduct } from "../Product Features/ProductSlice";
import { LuView } from "react-icons/lu";
import Swal from "sweetalert2";

export default function ProductList() {
  const { productList } = useSelector((state) => state.ProductList);
  const dispatch = useDispatch();

  function trash(id) {
    Swal.fire({
      title: "Do you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id));
        dispatch(viewProduct());
        Swal.fire({
          title: "Deleted!",
          icon: "success",
          timer: 1200,
          showConfirmButton: true,
        });
      }else{
         Swal.fire({
          title: "Product Not Deleted!",
          icon: "success",
          timer: 1200,
          showConfirmButton: true,
        });
      }
    });
  }

  useEffect(() => {
    dispatch(viewProduct());
  }, [dispatch]);

  return (
    <div className="container-fluid bg-light py-5" style={{ height: "100vh" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark mb-4">🛒 Product Management</h2>
        <NavLink
          className="btn btn-primary px-4 py-2 fs-5 shadow-sm rounded-3"
          to="/form"
        >
          <FaPlus className="mb-1 me-2" />
          Add New Product
        </NavLink>
      </div>

      <div className="d-flex flex-wrap justify-content-center px-5">
        {productList && productList.length > 0 ? (
          productList.map((ele, index) => (
            <div
              className="col-sm-10 col-md-6 col-lg-3 mb-4  d-flex justify-content-evenly"
              key={index}
            >
              <div
                className="card border-0 shadow-lg rounded-4 p-3 w-75"
              
              >
                <div className="card-body text-">
                  <h4 className="card-title fw-semibold text-primary mb-3">
                    {ele.name}
                  </h4>
                  <p className="text-muted mb-1">
                    <strong>Category:</strong> {ele.category}
                  </p>
                  <p className="text-muted mb-3">
                    <strong>Price:</strong> ₹{ele.price}
                  </p>

                  <div className="d-flex justify-content- mt-3">
                    <button
                      className="btn btn-outline-danger rounded-3"
                      onClick={() => trash(ele.id)}
                    >
                      <AiFillDelete className="fs-5" />
                    </button>

                    <NavLink
                      to={`/update/${ele.id}`}
                      className="btn btn-outline-warning mx-3 rounded-3"
                    >
                      <FaEdit className="fs-5" />
                    </NavLink>

                    <NavLink
                      to={`/view/${ele.id}`}
                      className="btn btn-outline-info rounded-3"
                    >
                      <LuView className="fs-5" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-dark fs-5 mt-5">
            No products available. Click <b>Add New Product</b> to create one!
          </div>
        )}
      </div>
    </div>
  );
}
