import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* Navbar har page par rahega */}
        <Navbar />

        {/* Navbar ki height ke baad content start hoga */}
        <main className="pt-18.75">

          <Routes>

            {/* Products Page */}
            <Route
              path="/"
              element={<Products />}
            />

            {/* Product Details */}
            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            {/* Cart Page */}
            <Route
              path="/cart"
              element={<Cart />}
            />

          </Routes>

        </main>

        {/* Footer har page par rahega */}
        <Footer />

      </BrowserRouter>
    </CartProvider>
  );
};

export default App;