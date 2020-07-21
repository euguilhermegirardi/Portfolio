import React from "react";

import "../../../scss/pages/Home/_info.scss";
import profile from "../../../assets/Home/profile.jpeg";
import "../../../scss/utils/_utilities.scss";

export default function Info() {
   return (
      <section className="info">
         <img className="info__img" src={profile} alt="profile.jpeg" />
         <div className="info__txt-container">
            <h2 className="info__h2">
               Interested in hiring me for your project?
            </h2>
            <p className="paragraph">
               Looking for an experienced frontend developer to build your web
               app or ship your software product? To start an initial chat, just
               drop me an email at{" "}
               <a className="info__link" href="/">
                  girardi.gui@icloud.com
               </a>{" "}
               or use the{" "}
               <a className="info__link" href="/">
                  form on the contact page
               </a>
               .
            </p>
         </div>
         <button className="btn">Let's Talk!</button>
      </section>
   );
}
