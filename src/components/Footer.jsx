

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#172033]">
      {/* ================= TOP LINE ================= */}
      <div className="w-full border-t border-[#e5e7eb]"></div>

      {/* ================= FOOTER CONTAINER ================= */}
      <div className="mx-auto w-full max-w-367.5 px-5 sm:px-8 lg:px-12">
        {/* ================= NEWSLETTER SECTION ================= */}
        <div className="border-b border-[#e5e7eb] py-10 text-center sm:py-12 md:py-14">
          <h2 className="text-[24px] font-semibold text-[#2d2d2d]">
            Stay in the loop
          </h2>

          <p className="mt-5 text-[15px] leading-6 text-[#697386]">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            style inspiration.
          </p>

          <div className="mx-auto mt-7 flex w-full max-w-112.5 items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-9.5 flex-1 rounded-full border border-[#e0e3e8] px-4 text-[13px] text-[#172033] outline-none shadow-[0_3px_8px_rgba(0,0,0,0.08)] placeholder:text-[#697386] focus:border-[#f59e0b]"
            />

            <button
              type="button"
              className="flex h-9.5 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5a000] text-[20px] text-[#172033] shadow-[0_3px_8px_rgba(0,0,0,0.12)] transition hover:bg-[#e89400] cursor-pointer"
            >
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-12">
          {/* ================= BRAND ================= */}
          <div>
            <h2 className="text-[23px] font-light tracking-[-0.5px]">
              BLOOM<span className="text-[#f5a000]">SHOP</span>
            </h2>

            <p className="mt-2 max-w-85 text-[15px] leading-6 text-[#697386]">
              Discover unique products that inspire your lifestyle. Quality
              craftsmanship meets modern design.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-[13px] text-[#697386]">
                <span className="text-[18px] text-[#f5a000]">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span>123 Fashion Street, Style City, SC 12345</span>
              </div>

              <div className="flex items-center gap-3 text-[13px] text-[#697386]">
                <span className="text-[17px] text-[#f5a000]">
                  <ion-icon name="search-outline"></ion-icon>
                </span>
                <span>03214712469</span>
              </div>

              <div className="flex items-center gap-3 text-[13px] text-[#697386]">
                <span className="text-[17px] text-[#f5a000]">
                  <ion-icon name="mail-unread-outline"></ion-icon>
                </span>
                <span>hello@bloomshop.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fafafa] text-[15px] text-[#172033] transition hover:bg-[#f5a000]"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fafafa] text-[15px] text-[#172033] transition hover:bg-[#f5a000]"
              >
                <ion-icon name="close-outline"></ion-icon>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fafafa] text-[15px] text-[#172033] transition hover:bg-[#f5a000]"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fafafa] text-[15px] text-[#172033] transition hover:bg-[#f5a000]"
              >
                <ion-icon name="location-outline"></ion-icon>
              </a>
            </div>
          </div>

          {/* ================= SHOP ================= */}
          <div>
            <h3 className="text-[14px] font-semibold tracking-[0.5px] text-[#252525]">
              SHOP
            </h3>

            <ul className="mt-5 space-y-5 text-[14px] text-[#697386]">
              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  All Products
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  New Arrivals
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Sale
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Featured
                </a>
              </li>
            </ul>
          </div>

          {/* ================= CUSTOMER CARE ================= */}
          <div>
            <h3 className="text-[14px] font-semibold tracking-[0.5px] text-[#252525]">
              CUSTOMER CARE
            </h3>

            <ul className="mt-5 space-y-5 text-[14px] text-[#697386]">
              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Shipping Info
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="text-[14px] font-semibold tracking-[0.5px] text-[#252525]">
              COMPANY
            </h3>

            <ul className="mt-5 space-y-5 text-[14px] text-[#697386]">
              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* ================= LEGAL ================= */}
          <div>
            <h3 className="text-[14px] font-semibold tracking-[0.5px] text-[#252525]">
              LEGAL
            </h3>

            <ul className="mt-5 space-y-5 text-[14px] text-[#697386]">
              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Cookie Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#f5a000]">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="flex flex-col gap-6 border-t border-[#e5e7eb] py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-[13px] leading-5 text-[#697386]">
            <p>
              © 2025 BloomShop™. Made with
              <span className="mx-1 text-[17px] text-[#ff334f]">♥</span>
              All Rights Reserved.
            </p>

            <p>
              Developed by{" "}
              <span className="font-semibold text-[#697386]">Bloomtpl</span> •
              Distributed by{" "}
              <span className="font-semibold text-[#697386]">ThemeWagon</span>
            </p>
          </div>

          <div className="flex items-center gap-7 text-[13px] text-[#697386]">
            <a href="#" className="hover:text-[#f5a000]">
              Privacy
            </a>

            <a href="#" className="hover:text-[#f5a000]">
              Terms
            </a>

            <a href="#" className="hover:text-[#f5a000]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
