import React from "react";
import {
   FaLinkedinIn,
   FaInstagram,
   FaGithub,
   FaAlignJustify,
} from "react-icons/fa";

import "../../scss/components/_navbar.scss";

export default function Nav() {
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
            <FaAlignJustify className="nav__icon--menu" />
         </div>
      </nav>
   );
}
