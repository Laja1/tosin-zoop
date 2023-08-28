import logo from "./logo.svg";
import "./App.css";
import Brand from "./Component/Brand";
import No from "./Component/Store/9/No";
import Gender from "./Component/Gender";
import Landingpg from "./Component/Landingpg";
import Product from "./Component/Product";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/brand" element={<Brand />} />
          <Route path="/No" element={<No />} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/product" element={<Product />} />
          <Route path="/" exact element={<Landingpg />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
