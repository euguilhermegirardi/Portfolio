import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";

import "../../scss/components/_navbar.scss";

export default function Nav() {
   const [menu, setMenu] = useState({
      menuOpen: false,
   });

   function openMenu() {
      setMenu({ menuOpen: true });
   }

   function closeMenu() {
      setMenu({ menuOpen: false });
   }

   return (
      <nav className="nav">
         <div className="nav__icons">
            <a
               className="nav__anchor"
               href="https://www.linkedin.com/in/guilherme-girardi-1aa6a1185/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaLinkedinIn className="nav__icon" />
            </a>
            <a
               className="nav__anchor"
               href="https://www.instagram.com/euguilhermegirardi/?hl=en"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaInstagram className="nav__icon" />
            </a>
            <a
               className="nav__anchor"
               href="https://github.com/euguilhermegirardi"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaGithub className="nav__icon" />
            </a>
         </div>
         <div className="nav__menu">
            <CheeseburgerMenu isOpen={menu.menuOpen} closeCallback={closeMenu}>
               <ul className="nav__dropdown">
                  <Link to="/">
                     <li className="nav__dropdown-item">Home</li>
                  </Link>
                  <Link to="/projects">
                     <li className="nav__dropdown-item">Projects</li>
                  </Link>
                  <Link to="/resume">
                     <li className="nav__dropdown-item">Resume</li>
                  </Link>
                  <Link to="/contact">
                     <li className="nav__dropdown-item">Contact</li>
                  </Link>
               </ul>
            </CheeseburgerMenu>

            <HamburgerMenu
               isOpen={menu.menuOpen}
               menuClicked={openMenu}
               width={25}
               height={17}
               strokeWidth={3}
               rotate={0}
               color="#34cb79"
               borderRadius={0}
               animationDuration={0.5}
            />
         </div>
      </nav>
   );
}
