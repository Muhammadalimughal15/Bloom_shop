import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [addedToCart, setAddedToCart] = useState(null);

  const navigate = useNavigate();

  const { addToCart } = useCart();

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Sirf 12 products
        setProducts(data.products.slice(0, 12));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // ================= HEART =================
  const handleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // ================= QUICK VIEW =================
  const handleQuickView = (id) => {
    navigate(`/product/${id}`);
  };

  // ================= ADD TO CART =================
  const handleAddToCart = (product) => {
    // Add product to cart
    addToCart(product);

    // Green button
    setAddedToCart(product.id);

    // 2 seconds baad normal button
    setTimeout(() => {
      setAddedToCart(null);
    }, 2000);
  };

  return (
    <section className="w-full bg-white px-6 py-16">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-16">
        <h2 className="text-[#F5A000] text-[42px] mb-3 md:text-[48px] font-semibold leading-tight font-['Inter','Inter_Fallback']">
          Step Into Style
        </h2>

        <p className="max-w-150 mx-auto text-[18px] md:text-[19px] leading-7 text-black">
          Discover our latest collection of premium sneakers
          <br className="hidden sm:block" />
          — comfort, design, and performance in every pair.
        </p>
      </div>

      {/* ================= LOADING ================= */}
      {loading ? (
        <p className="text-center text-lg font-medium">
          Loading products...
        </p>
      ) : (
        /* ================= PRODUCTS GRID ================= */
        <div className="max-w-250 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[20px] overflow-hidden border border-[#e1e4e8] shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* ================= IMAGE ================= */}
              <div className="relative w-full h-75 overflow-hidden bg-gray-100">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* ================= HEART ================= */}
                <button
                  onClick={() => handleFavorite(product.id)}
                  className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  hover:scale-110 cursor-pointer
                  ${
                    favorites.includes(product.id)
                      ? "text-red-500 opacity-100"
                      : "text-black"
                  }`}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill={
                      favorites.includes(product.id)
                        ? "currentColor"
                        : "none"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>

                {/* ================= QUICK VIEW ================= */}
                <div
                  className="absolute inset-0 z-10 flex items-center justify-center
                  bg-black/10 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300"
                >
                  <button
                    onClick={() => handleQuickView(product.id)}
                    className="bg-white px-7 py-3 rounded-full
                    text-[14px] font-semibold text-black
                    shadow-lg hover:bg-[#F5A000]
                    transition-colors duration-200 cursor-pointer"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* ================= PRODUCT INFO ================= */}
              <div className="px-4 pt-4 pb-4">
                <h3 className="text-[16px] font-semibold text-black">
                  {product.title}
                </h3>

                <p className="mt-1 text-[17px] font-bold text-black">
                  ${product.price}
                </p>

                {/* ================= ADD TO CART ================= */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`mt-4 w-full h-9 rounded-full text-[14px] font-medium text-black
                  flex items-center justify-center gap-2
                  transition-all duration-200 cursor-pointer
                  ${
                    addedToCart === product.id
                      ? "bg-green-500 hover:bg-green-500"
                      : "bg-[#F5A000] hover:bg-[#E89500]"
                  }`}
                >
                  {addedToCart === product.id ? (
                    <>
                      {/* CHECK ICON */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l4 4L19 7" />
                      </svg>

                      Added to Cart 
                    </>
                  ) : (
                    <>
                      {/* CART ICON */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 3h2l2.4 11.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H6" />
                        <circle cx="10" cy="20" r="1" />
                        <circle cx="18" cy="20" r="1" />
                      </svg>

                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;