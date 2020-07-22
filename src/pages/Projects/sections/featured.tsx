import React from "react";

import "../../../scss/pages/Home/_featured.scss";
import theSun from "../../../assets/Features/the-irish-sun.png";
import theIrish from "../../../assets/Features/the-irish-times.png";
import globo from "../../../assets/Features/globo.png";
import knots from "../../../assets/Features/knots-4-you.png";
import catalog from "../../../assets/Features/catalog-of-books.png";
import ecommerce from "../../../assets/Features/ecommerce.png";

export default function Featured() {
   return (
      <>
         <section className="featured">
            <div className="featured__card">
               <img
                  className="featured__img"
                  src={theSun}
                  alt="the-irish-sun-home-page.png"
               />
               <div className="featured__txt-container">
                  <h3 className="featured__project">The Irish Sun</h3>
                  <div className="featured__techs-container">
                     <span className="featured__techs">HTML</span>
                     <span className="featured__techs">CSS</span>
                     <span className="featured__techs">VanillaJS</span>
                  </div>
               </div>
            </div>

            <div className="featured__card">
               <img
                  className="featured__img"
                  src={theIrish}
                  alt="the-irish-sun-home-page.png"
               />
               <div className="featured__txt-container">
                  <h3 className="featured__project">The Irish Times</h3>
                  <div className="featured__techs-container">
                     <span className="featured__techs">HTML</span>
                     <span className="featured__techs">CSS</span>
                     <span className="featured__techs">VanillaJS</span>
                  </div>
               </div>
            </div>

            <div className="featured__card">
               <img
                  className="featured__img"
                  src={globo}
                  alt="the-irish-sun-home-page.png"
               />
               <div className="featured__txt-container">
                  <h3 className="featured__project">Globo</h3>
                  <div className="featured__techs-container">
                     <span className="featured__techs">HTML</span>
                     <span className="featured__techs">CSS</span>
                     <span className="featured__techs">VanillaJS</span>
                  </div>
               </div>
            </div>

            <div className="featured__card">
               <img
                  className="featured__img"
                  src={knots}
                  alt="the-irish-sun-home-page.png"
               />
               <div className="featured__txt-container">
                  <h3 className="featured__project">Knots 4 You</h3>
                  <div className="featured__techs-container">
                     <span className="featured__techs">ReactJS</span>
                     <span className="featured__techs">React Hooks</span>
                     <span className="featured__techs">Redux-Saga</span>
                  </div>
               </div>
            </div>

            <div className="featured__card">
               <img
                  className="featured__img"
                  src={catalog}
                  alt="the-irish-sun-home-page.png"
               />
               <div className="featured__txt-container">
                  <h3 className="featured__project">Catalog of Books</h3>
                  <div className="featured__techs-container">
                     <span className="featured__techs">ReactJS</span>
                     <span className="featured__techs">React Hooks</span>
                     <span className="featured__techs">React Hook Form</span>
                  </div>
               </div>
            </div>

            <div className="featured__card">
               <img
                  className="featured__img"
                  src={ecommerce}
                  alt="the-irish-sun-home-page.png"
               />
               <div className="featured__txt-container">
                  <h3 className="featured__project">E-Commcerce</h3>
                  <div className="featured__techs-container">
                     <span className="featured__techs">ReactJS</span>
                     <span className="featured__techs">Class Component</span>
                     <span className="featured__techs">Context</span>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
