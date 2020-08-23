import React from "react";
import { Link } from "react-router-dom";

import "../../../scss/pages/Home/_info.scss";
import profile from "../../../assets/Home/profile.jpeg";
import "../../../scss/utils/_utilities.scss";

export default function Info() {
   return (
      <section className="info">
         <div className="container">
            <div className="info__container">
               <img className="info__img" src={profile} alt="profile.jpeg" />
               <div className="info__txt-container">
                  <h2 className="info__h2">
                     Interested in hiring me for your project?
                  </h2>
                  <p className="paragraph">
                     Looking for an experienced frontend developer to build your
                     web app or ship your software product? To start an initial
                     chat, just drop me an email at{" "}
                     <span className="info__link">girardi.gui@icloud.com</span>{" "}
                     or use the{" "}
                     <Link className="info__link" to="/contact">
                        form on the contact page
                     </Link>
                     .
                  </p>
               </div>

               <Link to="/contact" className="btn">
                  Let's Talk!
               </Link>
            </div>
         </div>
      </section>
   );
}
