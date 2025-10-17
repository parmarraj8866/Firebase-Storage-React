import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { FaBackward } from 'react-icons/fa';

export default function View() {

  let { id } = useParams();
  let { productList } = useSelector((state) => state.ProductList);
  let ViewsingalData = productList.find((ele) => ele.id == id);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="card shadow-lg border-0 rounded-4"
          style={{ width: "22rem", background: "#f8f9fa" }}
        >
          <div className="card-body">
            <h3 className="fw-bold text-primary mb-3">
              🛍️ Product Details
            </h3>
            <hr />
            <h5 className="card-title text-dark mb-2">
              <strong>Category:</strong> {ViewsingalData.category}
            </h5>
            <h5 className="card-title text-dark mb-2">
              <strong>Name:</strong> {ViewsingalData.name}
            </h5>
            <h6 className="card-text text-dark mb-4">
              <strong>Price:</strong> ₹{ViewsingalData.price}
            </h6>

            <NavLink className='btn btn-dark mt-2 fs-5 px-4 py-2 rounded-3 shadow-sm' to='/'>
              <FaBackward className="mb-1 me-2" />
              Back
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
