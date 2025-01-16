import React, { createContext, useEffect, useState } from "react";
import { Home } from "./Components/Home_page/Home";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Viewpage from "./Components/Addcart/Viewpage";
import Cart from "./Components/Addcart/Cart";
import Navi from "./Components/navigation_bar/Navi";
import Aboutpage from "./Components/About/Aboutpage";
import Contactpage from "./Components/Contact/Contactpage";
import Footpage from "./Components/footsection/Footpage";

const productcontext = createContext();
const App = () => {
  const [product, setproduct] = useState([]);
  const [viewitem, setviewitem] = useState([]);
  const [cartitem, setcartitem] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setproduct(response.data.products));
  }, []);

  return (
    <div>
      <productcontext.Provider
        value={{ viewitem, setviewitem, cartitem, setcartitem,product,setproduct}}
      >
        <BrowserRouter>
          <Navi />
          <Routes>
            <Route path="/" element={<Home products={product} />} />
            <Route path="/home" element={<Home products={product} />} />
            <Route path="/view" element={<Viewpage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<Aboutpage/>}/>
            <Route path="/contact" element={<Contactpage/>}/>
          </Routes>
          <Footpage/>
        </BrowserRouter>
      </productcontext.Provider>
    </div>
  );
};

export default App;
export { productcontext };
