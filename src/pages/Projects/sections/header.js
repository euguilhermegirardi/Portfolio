import React from "react";

import "../../../scss/pages/Projects/_header.scss";

export default function Header() {
   return (
      <>
         <header className="header">
            <div className="container">
               <div className="header__container header__container--projects">
                  <h2 className="h2">Projects</h2>
                  <p className="paragraph">
                     In-depth Case Studies to show you what I can offer and how
                     I work
                  </p>
               </div>
            </div>
         </header>
      </>
   );
}
