import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { links } from "../../data/links";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function checkWindowSize() {
    const isGreaterThan758px = window.innerWidth > 758;

    if (isGreaterThan758px) {
      setIsMobileMenuOpen(false);
    } else {
      return;
    }
  }

  window.addEventListener("resize", checkWindowSize);

  return (
    <nav className="bg-secondary-100 flex justify-between items-center flex-wrap md:flex-nowrap w-full h-[100px]  px-5 sm:px-10 lg:px-[100px] py-5 border-b-4 border-primary relative  ">
      <h1 className=" text-tertiary w-[200px]">Tech-Support</h1>
      <button className="ml-auto md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <IoMdClose size={32} color="#FC4100" strokeWidth={1} />
        ) : (
          <CiMenuFries size={32} color="#fc4100" strokeWidth={1} />
        )}
      </button>
      <div className="w-full mx-auto">
        <ul
          className={`${
            isMobileMenuOpen
              ? "flex flex-col justify-center items-start px-5 absolute  w-full gap-4 bg-secondary py-5 rounded top-20 sm:px-10 right-0"
              : "hidden md:flex  gap-4 lg:gap-10   md:justify-end items-center ml-auto w-full"
          } `}
        >
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                onClick={() => setIsMobileMenuOpen(false)}
                to={link.url}
                className={`text-tertiary hover:text-primary ${({
                  isActive,
                }) => {
                  return isActive ? "active" : "";
                }}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
