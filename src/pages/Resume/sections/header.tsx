import React from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

import "../../../scss/pages/Resume/_header.scss";

export default function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="header__container header__container--resume">
               <h2 className="h2">Resume</h2>
               <Link
                  to="/Resume/curriculum.pdf"
                  className="btn header__btn"
                  target="_blank"
                  download
               >
                  <FaFileDownload />
                  Download PDF Version
               </Link>
            </div>
         </div>
      </header>
   );
}
