import { useState } from "react";
import Navbar from "./components/Navbar/index";
import Product from "./components/Product/index";
import item from "./data";
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" mt-6 lg:mx-8 lg:mb-16">
      <Navbar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      <hr className="hidden lg:flex mt-8 mb-20 lg:text-gray" />
      <Product item={item} />
    </div>
  );
}

export default App;
