import React from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

import "../../../scss/pages/Resume/_header.scss";

export default function Header() {
   return (
      <header className="header">
         <h2 className="h2">Resume</h2>
         <button className="btn header__btn">
            <FaFileDownload />
            <Link to="/Resume/curriculum.pdf" target="_blank" download>
               Download PDF Version
            </Link>
         </button>
      </header>
   );
}
