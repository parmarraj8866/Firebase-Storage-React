import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../Product Features/ProductSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

function FormUI() {
  const { register, handleSubmit, reset } = useForm();

  let dispatch = useDispatch();
  let redirect = useNavigate();
  let { id } = useParams();

  const { productList } = useSelector((state) => state.ProductList);
  let singalData = productList?.find((ele) => ele.id == id);

  useEffect(() => {
    reset(singalData);
  }, [id]);

  function onSubmit(data) {
    if (id == null) {
      dispatch(createProduct(data));
      reset();
      redirect("/");
      Swal.fire({
        title: "Product Added!",
        icon: "success",
      });
    } else {
      dispatch(updateProduct(data));
      reset(data);
      redirect("/");
      Swal.fire({
        title: "Product Updated!",
        icon: "success",
      });
    }
  }

  return (
    <div
      className="container mt-5 p-4 rounded shadow-lg"
      style={{
        maxWidth: "500px",
        background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
        border: "1px solid #00acc1",
      }}
    >
      <h2 className="text-center mb-4 fw-bold text-dark  pb-2">
        {id ? "Update Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="form-label fw-semibold text-dark">Category</label>
          <select
            {...register("category", { required: true })}
            className="form-select shadow-sm"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
            <option value="Books">Books</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold text-dark">
            Product Name
          </label>
          <input
            {...register("name", { required: true })}
            className="form-control shadow-sm"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold text-dark">
            Product Price
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="form-control shadow-sm"
            placeholder="Enter product price"
          />
        </div>

        <div className="text-center">
          <button className="btn btn-dark w-50 shadow-sm">
            {id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormUI;
