import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

import "../../scss/components/_footer.scss";

export default function Footer() {
   return (
      <footer className="footer">
         <div className="footer__icons">
            <a
               className="footer__anchor"
               href="https://www.linkedin.com/in/guilherme-girardi-1aa6a1185/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaLinkedinIn className="footer__icon" />
            </a>
            <a
               className="footer__anchor"
               href="https://www.instagram.com/euguilhermegirardi/?hl=en"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaInstagram className="footer__icon" />
            </a>
            <a
               className="footer__anchor"
               href="https://github.com/euguilhermegirardi"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaGithub className="footer__icon" />
            </a>
         </div>
      </footer>
   );
}
