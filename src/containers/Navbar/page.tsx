import React from "react";
const Navbar = () => {
  return (
    <div className="w-full fixed">
      <div className="flex flex-wrap place-items-right">
        <section className="">
          <nav className=" bg-gray-900 text-white w-screen opacity-80">
            <div className="px-5 xl:px-12 py-4 flex w-full items-center">
              <a
                className="text-3xl font-bold font-heading text-orange-500 "
                href="#"
              >
                {/* <img className="h-9" src="logo.png" alt="logo"/> */}
                Ryali Engineers
              </a>

              <ul className="md:flex ml-[500px] mx-auto font-semibold font-heading space-x-12 ">
                <li>
                  <a className="hover:text-orange-500" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-orange-500" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-orange-500" href="#">
                    Clients
                  </a>
                </li>
                <li>
                  <a className="hover:text-orange-500" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};
export default Navbar;
