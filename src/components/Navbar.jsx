import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-18.75 bg-white border-t-2 border-b border-gray-200 shadow-md">

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-384 h-full mx-auto px-6 py-4">

        {/* ================= NAV CONTENT ================= */}
        <div className="w-full h-full flex items-center">

          {/* ================= LOGO ================= */}
          <button
            onClick={() => navigate("/")}
            className="logo shrink-0 w-[147.625px] h-8 font-['Inter','Inter_Fallback'] text-left cursor-pointer"
          >
            <span className="text-[#172033] text-[24px] font-normal">
              BLOOM
            </span>

            <span className="text-[#F5A000] text-[24px] font-normal">
              SHOP
            </span>
          </button>

          {/* ================= DESKTOP CONTACT ================= */}
          <div className="hidden md:flex contact ml-15.5 h-9 w-21 items-center justify-center font-['Inter','Inter_Fallback'] text-[14px] font-bold">
            <a
              href="#"
              className="text-[#172033] hover:text-[#F5A000] px-4 py-2"
            >
              Contact
            </a>
          </div>

          {/* ================= DESKTOP SEARCH ================= */}
          <div className="hidden md:block ml-auto mr-auto w-md">
            <div className="w-full h-9.5 border border-[#d3d8e0] focus-within:border-[1.5px] focus-within:border-black rounded-4xl flex items-center">

              {/* Search Icon */}
              <div className="ml-3 shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[#8993a4]"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20L16.65 16.65" />
                </svg>
              </div>

              {/* Search Input */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-full pl-3 pr-3 outline-none text-[14px] text-gray-700 placeholder:text-[#a0a5ad] font-medium font-['Inter','Inter_Fallback']"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="ml-auto shrink-0 flex items-center justify-end gap-1 sm:gap-2 md:gap-6.75">

            {/* ================= MOBILE SEARCH ================= */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
              }}
              className="md:hidden shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-[#172033] hover:text-[#F5A000] hover:bg-gray-100 cursor-pointer"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16.65 16.65" />
              </svg>
            </button>

            {/* ================= CART ================= */}
            <div className="relative shrink-0">

              <button
                onClick={() => navigate("/cart")}
                className="relative w-10 h-10 flex items-center justify-center rounded-full text-[#172033] hover:text-[#F5A000] hover:bg-gray-100 cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3h2l2.4 11.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H6" />

                  <circle cx="10" cy="20" r="1" />

                  <circle cx="18" cy="20" r="1" />
                </svg>

                {/* ================= CART COUNT ================= */}
                {cartCount > 0 && (
                  <span
                    className="
                      absolute -top-1 -right-1
                      min-w-5 h-5 px-1
                      bg-[#F5A000]
                      text-black
                      text-[11px]
                      font-bold
                      rounded-full
                      flex items-center justify-center
                    "
                  >
                    {cartCount}
                  </span>
                )}
              </button>

            </div>

            {/* ================= DESKTOP SIGN IN ================= */}
            <div className="hidden md:block shrink-0">
              <button
                className="
                  px-3 py-2
                  rounded-full
                  text-[14px]
                  text-black
                  hover:text-[#F5A000]
                  hover:bg-[#FFF3E0]
                  cursor-pointer
                "
              >
                Sign In
              </button>
            </div>

            {/* ================= DESKTOP SIGN UP ================= */}
            <div className="hidden md:block shrink-0">
              <button
                className="
                  text-[14px]
                  text-black
                  bg-[#F5A000]
                  px-4.25 py-2
                  rounded-full
                  shadow-md
                  hover:bg-[#E89500]
                  cursor-pointer
                "
              >
                Sign Up
              </button>
            </div>

            {/* ================= MOBILE HAMBURGER ================= */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
              }}
              className="
                md:hidden
                shrink-0
                w-10 h-10
                flex items-center justify-center
                rounded-full
                text-[#172033]
                hover:text-[#F5A000]
                hover:bg-gray-100
                cursor-pointer
              "
            >
              {menuOpen ? (
                /* ================= X ICON ================= */
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6L18 18" />
                  <path d="M18 6L6 18" />
                </svg>
              ) : (
                /* ================= HAMBURGER ICON ================= */
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </div>

      {/* ================= MOBILE SEARCH BAR ================= */}
      {searchOpen && (
        <div className="md:hidden px-6 pb-4 bg-white border-b border-gray-200">

          <div className="w-full h-10 border border-[#d3d8e0] focus-within:border-[1.5px] focus-within:border-black rounded-full flex items-center">

            {/* Search Icon */}
            <div className="ml-3 shrink-0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-[#8993a4]"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16.65 16.65" />
              </svg>
            </div>

            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                className="
                  w-full
                  h-full
                  pl-3
                  pr-3
                  outline-none
                  text-[15px]
                  text-gray-700
                  placeholder:text-[#a0a5ad]
                  font-medium
                  font-['Inter','Inter_Fallback']
                "
              />
            </div>

          </div>
        </div>
      )}

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md z-50">

          <div className="px-6 py-4 flex flex-col items-center gap-2">

            {/* Contact */}
            <a
              href="#"
              className="
                w-full
                text-center
                px-4 py-3
                rounded-lg
                text-[15px]
                text-[#172033]
                hover:text-[#F5A000]
                hover:bg-[#FFF3E0]
              "
            >
              Contact
            </a>

            {/* Sign In */}
            <button
              className="
                w-full
                text-center
                px-4 py-3
                rounded-lg
                text-[15px]
                text-[#172033]
                hover:text-[#F5A000]
                hover:bg-[#FFF3E0]
                cursor-pointer
              "
            >
              Sign In
            </button>

            {/* Sign Up */}
            <button
              className="
                w-full
                text-center
                px-4 py-3
                rounded-lg
                text-[15px]
                text-black
                bg-[#F5A000]
                hover:bg-[#E89500]
                cursor-pointer
              "
            >
              Sign Up
            </button>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;