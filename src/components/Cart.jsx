import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Heart, Car, Shield } from "lucide-react";

const Cart = () => {
  
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // 8% tax
  const tax = subtotal * 0.08;

  const total = subtotal + tax;

  return (
    <section className="min-h-screen bg-white px-6 py-6 md:px-10 lg:px-16">
      {/* ================= HEADER ================= */}
      <div className="max-w-362.5 mx-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#171717]">
              Shopping Cart
            </h1>

            <p className="mt-2 text-[15px] text-[#64748b]">
              {cart.length === 0
                ? "Your cart is empty"
                : `${cart.length} ${
                    cart.length === 1 ? "item" : "items"
                  } in your cart`}
            </p>
          </div>

          <Link
            to="/"
            className="hidden sm:flex items-center gap-2 text-[14px] text-[#475569] hover:text-black transition"
          >
            <span className="text-lg">←</span>
            Continue Shopping
          </Link>
        </div>

        {/* ================= EMPTY CART ================= */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="text-6xl mb-5">🛒</div>

            <h2 className="text-2xl font-semibold text-[#172033]">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>

            <Link
              to="/"
              className="mt-6 px-6 py-3 rounded-full bg-[#F5A000] text-black font-semibold hover:bg-[#E89500]"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            {/* ================= MAIN CONTENT ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
              {/* ================= CART ITEMS ================= */}
              <div>
                <div className="border border-[#e2e5e9] rounded-[22px] shadow-sm overflow-hidden">
                  {/* CART HEADER */}
                  <div className="flex items-center justify-between  px-6 py-6 border-b border-[#e5e7eb]">
                    <h2 className="text-[18px] font-semibold text-[#171717]">
                      Cart Items
                    </h2>

                    <button
                      onClick={clearCart}
                      className="flex items-center gap-2 text-[13px] text-[#64748b] hover:text-red-500 transition cursor-pointer"
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                      Clear All
                    </button>
                  </div>

                  {/* PRODUCTS */}
                  <div className="px-6">
                    {cart.map((product) => (
                      <div
                        key={product.id}
                        className="relative flex items-center gap-4 py-5 border-b border-[#eeeeee] last:border-b-0"
                      >
                        {/* PRODUCT IMAGE */}
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-24.5 h-24.5 rounded-2xl object-cover bg-gray-100 shrink-0"
                        />

                        {/* PRODUCT DETAILS */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[16px] md:text-[17px] font-semibold text-[#171717] truncate">
                            {product.title}
                          </h3>

                          <p className="mt-1 text-[14px] text-[#64748b]">
                            ${Number(product.price).toFixed(2)} each
                          </p>

                          {/* QUANTITY */}
                          <div className="mt-4 inline-flex items-center border border-[#dfe3e8] rounded-full h-9.5">
                            <button
                              onClick={() => decreaseQuantity(product.id)}
                              className="w-9 h-full flex items-center justify-center text-[#64748b] hover:text-black cursor-pointer text-xl"
                            >
                              <Minus size={18} />
                            </button>

                            <span className="w-8 text-center text-[14px] font-semibold">
                              {product.quantity}
                            </span>

                            <button
                              onClick={() => increaseQuantity(product.id)}
                              className="w-9 h-full flex items-center justify-center text-[#64748b] hover:text-black cursor-pointer text-xl"
                            >
                              <Plus size={18} />
                            </button>
                          </div>
                        </div>

                        {/* DELETE */}
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="absolute right-0 top-5 text-[#64748b] hover:text-red-500 transition cursor-pointer"
                          title="Remove item"
                        >
                          <ion-icon name="trash-bin-outline"></ion-icon>
                        </button>

                        {/* ITEM TOTAL */}
                        <div className="absolute right-0 bottom-6 text-[17px] font-bold text-[#171717]">
                          ${(product.price * product.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ================= ORDER SUMMARY ================= */}
              <div>
                <div className="border border-[#e2e5e9] rounded-[22px] p-6 shadow-sm">
                  <h2 className="text-[18px] font-semibold text-[#171717]">
                    Order Summary
                  </h2>

                  {/* SUBTOTAL */}
                  <div className="mt-7 flex items-center justify-between text-[14px]">
                    <span className="text-[#64748b]">
                      Subtotal ({cart.length}{" "}
                      {cart.length === 1 ? "item" : "items"})
                    </span>

                    <span className="font-semibold text-[#171717]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  {/* SHIPPING */}
                  <div className="mt-4 flex items-center justify-between text-[14px]">
                    <span className="text-[#64748b]">Shipping</span>

                    <span className="px-3 py-1 rounded-full bg-[#f1f3f5] text-[12px] font-medium text-[#475569]">
                      Free
                    </span>
                  </div>

                  {/* TAX */}
                  <div className="mt-4 flex items-center justify-between text-[14px]">
                    <span className="text-[#64748b]">Tax</span>

                    <span className="font-semibold text-[#171717]">
                      ${tax.toFixed(2)}
                    </span>
                  </div>

                  {/* DIVIDER */}
                  <div className="border-t border-[#e5e7eb] mt-5 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[17px] font-semibold text-[#171717]">
                        Total
                      </span>

                      <span className="text-[19px] font-bold text-[#F5A000]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* CHECKOUT BUTTON */}
                  <button
                    className="
                      mt-5
                      w-full
                      h-10.5
                      rounded-full
                      bg-[#F5A000]
                      text-black
                      text-[14px]
                      font-semibold
                      hover:bg-[#E89500]
                      transition-all
                      cursor-pointer
                    "
                  >
                    💳 &nbsp; Proceed to Checkout
                  </button>

                  {/* BENEFITS */}
                  <div className="border-t border-[#e5e7eb] mt-4 pt-4 space-y-4">
                    <div className="flex items-center gap-3 text-[14px] text-[#64748b]">
                      <span className="text-green-500">
                        <Shield size={20} />
                      </span>
                      Secure SSL checkout
                    </div>

                    <div className="flex items-center gap-3 text-[14px] text-[#64748b]">
                      <span className="text-blue-500">
                        <Car size={24} />
                      </span>
                      Free returns within 30 days
                    </div>

                    <div className="flex items-center gap-3 text-[14px] text-[#64748b]">
                      <span className="text-red-500">
                        <Heart size={20} />
                      </span>
                      24/7 customer support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RECOMMENDATIONS ================= */}
            <div className="mt-16 border border-[#e2e5e9] rounded-[22px] min-h-47.5 px-6 py-6">
              <h2 className="text-[16px] font-semibold text-[#171717]">
                You might also like
              </h2>

              <div className="flex flex-col items-center justify-center py-10">
                <p className="text-[#64748b] text-[15px]">
                  Discover more products that match your style
                </p>

                <Link
                  to="/"
                  className="mt-4 px-5 py-2.5 rounded-full border border-[#e1e4e8] shadow-sm text-[13px] font-medium hover:bg-gray-50 transition"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
