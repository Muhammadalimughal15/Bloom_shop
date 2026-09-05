import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  // ADD TO CART STATE
  const [addingToCart, setAddingToCart] = useState(false);

  // CART CONTEXT
  const { addToCart } = useCart();

  // ================= FETCH PRODUCT =================
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Loading product...</p>
      </div>
    );
  }

  // ================= NOT FOUND =================
  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-lg">Product not found.</p>
      </div>
    );
  }

  // ================= QUANTITY =================
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // ================= ADD TO CART =================
  const handleAddToCart = () => {
    // Product ko pehli dafa cart mein add karo
    addToCart(product);

    // Agar quantity 1 se zyada hai
    // to additional quantity add karo
    if (quantity > 1) {
      for (let i = 1; i < quantity; i++) {
        addToCart(product);
      }
    }

    // Green loading state
    setAddingToCart(true);

    // 2 seconds baad normal button
    setTimeout(() => {
      setAddingToCart(false);
    }, 2000);
  };

  // ================= BUY NOW =================
  const handleBuyNow = () => {
    console.log("Buy Now:", {
      product,
      quantity,
    });
  };

  // ================= SHARE =================
  const handleShare = async () => {
    try {
      await navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  return (
    <section className="w-full min-h-screen bg-white px-6 py-10">
      <div className="max-w-312.5 mx-auto">
        {/* ================= BACK ================= */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-[14px]
          font-medium text-gray-600
          hover:text-[#F5A000] transition-colors cursor-pointer"
        >
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
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>

          Back to Products
        </button>

        {/* ================= MAIN PRODUCT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* ================= PRODUCT IMAGE ================= */}
          <div className="w-full flex justify-center md:justify-start">
            <div
              className="w-full md:w-[410.656px]
              h-[542.672px]
              rounded-[20px]
              overflow-hidden
              bg-gray-100
              shadow-md"
            >
              <img
                src={
                  product.images && product.images.length > 0
                    ? product.images[0]
                    : product.thumbnail
                }
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= PRODUCT INFORMATION ================= */}
          <div className="flex flex-col justify-center">
            {/* PRODUCT TITLE */}
            <h1
              className="text-[34px] md:text-[38px]
              font-bold text-[#292929] leading-tight"
            >
              {product.title}
            </h1>

            {/* ================= RATING ================= */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center text-[#F5A000]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <span className="text-[14px] text-gray-500">
                ({product.rating}) • {product.reviews?.length || 0} reviews
              </span>
            </div>

            {/* ================= PRICE ================= */}
            <p className="mt-5 text-[30px] font-bold text-[#292929]">
              ${product.price}
            </p>

            {/* ================= DESCRIPTION ================= */}
            <p className="mt-6 text-[16px] leading-7 text-gray-500">
              {product.description}
            </p>

            {/* ================= LINE ================= */}
            <div className="w-full border-t border-gray-200 mt-7" />

            {/* ================= QUANTITY ================= */}
            <div className="mt-7">
              <p className="text-[14px] font-medium text-black mb-3">
                Quantity
              </p>

              <div
                className="w-35.5 h-10.5
                border border-gray-200
                rounded-full
                flex items-center
                justify-between
                px-4"
              >
                {/* MINUS */}
                <button
                  onClick={decreaseQuantity}
                  className="text-[22px] text-gray-500
                  hover:text-black cursor-pointer"
                >
                  −
                </button>

                {/* QUANTITY */}
                <span className="text-[14px]">
                  {quantity}
                </span>

                {/* PLUS */}
                <button
                  onClick={increaseQuantity}
                  className="text-[22px] text-gray-500
                  hover:text-black cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div
              className="mt-4
              grid grid-cols-1
              sm:grid-cols-2
              gap-4"
            >
              {/* ================= ADD TO CART ================= */}
              <button
                onClick={handleAddToCart}
                disabled={addingToCart}
                className={`
                  h-10.5
                  rounded-full
                  text-[14px]
                  font-medium
                  text-black
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  duration-200

                  ${
                    addingToCart
                      ? "bg-green-500 cursor-not-allowed"
                      : "bg-[#F5A000] hover:bg-[#E89500] cursor-pointer"
                  }
                `}
              >
                {addingToCart ? (
                  <>
                    {/* LOADING CIRCLE */}
                    <span
                      className="
                        w-4
                        h-4
                        border-2
                        border-black/30
                        border-t-black
                        rounded-full
                        animate-spin
                      "
                    ></span>

                    Adding...
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

                      <circle
                        cx="10"
                        cy="20"
                        r="1"
                      />

                      <circle
                        cx="18"
                        cy="20"
                        r="1"
                      />
                    </svg>

                    Add to Cart
                  </>
                )}
              </button>

              {/* ================= BUY NOW ================= */}
              <button
                onClick={handleBuyNow}
                className="h-10.5
                bg-white
                border border-gray-200
                rounded-full
                text-[14px]
                font-medium
                text-black
                shadow-sm
                hover:bg-gray-50
                transition-colors
                cursor-pointer"
              >
                Buy Now
              </button>
            </div>

            {/* ================= WISHLIST + SHARE ================= */}
            <div className="mt-6 flex items-center gap-9">
              {/* WISHLIST */}
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`flex items-center gap-3
                text-[14px]
                cursor-pointer
                transition-colors
                ${
                  wishlist
                    ? "text-red-500"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={wishlist ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                </svg>

                Add to Wishlist
              </button>

              {/* SHARE */}
              <button
                onClick={handleShare}
                className="flex items-center gap-3
                text-[14px]
                text-gray-500
                hover:text-black
                cursor-pointer"
              >
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
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />

                  <line
                    x1="8.59"
                    y1="13.51"
                    x2="15.42"
                    y2="17.49"
                  />

                  <line
                    x1="15.41"
                    y1="6.51"
                    x2="8.59"
                    y2="10.49"
                  />
                </svg>

                Share
              </button>
            </div>
          </div>
        </div>

        {/* ================= FEATURES CARD ================= */}
        <div
          className="mt-20
          border border-gray-200
          rounded-[22px]
          shadow-sm
          px-8 py-8"
        >
          <div
            className="grid
            grid-cols-1
            md:grid-cols-3
            gap-8"
          >
            {/* ================= FREE SHIPPING ================= */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12
                rounded-full
                bg-[#FFF5E5]
                flex items-center
                justify-center"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5A000"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="1"
                    y="3"
                    width="15"
                    height="13"
                  />

                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />

                  <circle
                    cx="5.5"
                    cy="18.5"
                    r="2.5"
                  />

                  <circle
                    cx="18.5"
                    cy="18.5"
                    r="2.5"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-[15px]">
                  Free Shipping
                </h3>

                <p className="text-[14px] text-gray-500 mt-1">
                  On orders over $50
                </p>
              </div>
            </div>

            {/* ================= WARRANTY ================= */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12
                rounded-full
                bg-[#FFF5E5]
                flex items-center
                justify-center"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5A000"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-[15px]">
                  Warranty
                </h3>

                <p className="text-[14px] text-gray-500 mt-1">
                  1 year guarantee
                </p>
              </div>
            </div>

            {/* ================= RETURNS ================= */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12
                rounded-full
                bg-[#FFF5E5]
                flex items-center
                justify-center"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5A000"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 3-6.7" />

                  <polyline points="3 4 3 10 9 10" />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-[15px]">
                  Easy Returns
                </h3>

                <p className="text-[14px] text-gray-500 mt-1">
                  30-day return policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;