import Navbar from "./Product Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormUI from "./pages/Form";
import ProductList from "./pages/ProductList";
import View from "./pages/View";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/form" element={<FormUI />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/update/:id" element={<FormUI />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
