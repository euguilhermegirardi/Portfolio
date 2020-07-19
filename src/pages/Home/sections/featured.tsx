import React from "react";

import "../../../scss/pages/Home/_featured.scss";
import theSun from "../../../assets/Home/the-irish-sun.png";
import catalog from "../../../assets/Home/catalog-of-books.png";
import knots from "../../../assets/Home/knots-4-you.png";

export default function Featured() {
   return (
      <section className="featured">
         <h2 className="featured__title">Featured Projects</h2>

         <div className="featured__card">
            <img
               className="feature__img"
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
               className="feature__img"
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
               className="feature__img"
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

         <button className="btn">View all projects</button>
      </section>
   );
}
