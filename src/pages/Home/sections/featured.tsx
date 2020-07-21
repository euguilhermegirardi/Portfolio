import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "../../../scss/pages/Home/_featured.scss";
import theSunImg from "../../../assets/Features/the-irish-sun.png";
import catalogImg from "../../../assets/Features/catalog-of-books.png";
import knotsImg from "../../../assets/Features/knots-4-you.png";
import ClickOutside from "../../../components/ClickOutside";

export default function Featured() {
   // Click outside to close
   // Create a ref that we add to the element for which we want to detect outside clicks
   const ref = useRef<HTMLDivElement>(null);
   // State for our modal
   const [theSun, setTheSun] = useState(false);
   const [catalog, setCatalog] = useState(false);
   const [knots, setKnots] = useState(false);
   // Call hook passing in the ref and a function to call on outside click
   ClickOutside(ref, () => setTheSun(false));
   ClickOutside(ref, () => setCatalog(false));
   ClickOutside(ref, () => setKnots(false));

   return (
      <section className="featured">
         <h2 className="h2">Featured Projects</h2>

         <div className="featured__card">
            <div className="featured__card-container">
               {theSun ? (
                  <div ref={ref} className="featured__proj-info">
                     <h4 className="featured__proj-info-title">
                        Project: The Irish Sun
                     </h4>
                     <p className="featured__proj-info-p">
                        A responsive clone home page that I built using the
                        mobile-first design.
                     </p>
                     <div className="featured__proj-info-btn">
                        <button
                           className="btn featured__btn"
                           onClick={() => {
                              window.open("https://the-irish-sun.netlify.app/");
                           }}
                        >
                           View Project
                        </button>
                        <button
                           className="btn featured__btn"
                           onClick={() => {
                              window.open(
                                 "https://github.com/euguilhermegirardi/the-irish-sun-home-page"
                              );
                           }}
                        >
                           GitHub
                        </button>
                     </div>
                  </div>
               ) : (
                  <button
                     className="featured__img-container"
                     onClick={() => setTheSun(true)}
                  >
                     <img
                        className="featured__img"
                        src={theSunImg}
                        alt="the-irish-sun-home-page.png"
                     />
                  </button>
               )}
            </div>

            <div className="featured__txt-container">
               <a
                  href="https://the-irish-times.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <h3 className="featured__project">The Irish Sun</h3>
               </a>
               <div className="featured__techs-container">
                  <span className="featured__techs">HTML</span>
                  <span className="featured__techs">CSS</span>
                  <span className="featured__techs">VanillaJS</span>
               </div>
            </div>
         </div>

         <div className="featured__card">
            <div className="featured__card-container">
               {knots ? (
                  <div ref={ref} className="featured__proj-info">
                     <h4 className="featured__proj-info-title">
                        Project: Knots 4 You
                     </h4>
                     <p className="featured__proj-info-p">
                        An e-commerce website page that I could learn many real
                        world techniques.
                     </p>
                     <div className="featured__proj-info-btn">
                        <button
                           className="btn featured__btn"
                           onClick={() => {
                              window.open("https://knots-4-you.netlify.app/");
                           }}
                        >
                           View Project
                        </button>
                        <button
                           className="btn featured__btn"
                           onClick={() => {
                              window.open(
                                 "https://github.com/euguilhermegirardi/Knots-4-You-React-Hooks"
                              );
                           }}
                        >
                           GitHub
                        </button>
                     </div>
                  </div>
               ) : (
                  <button
                     className="featured__img-container"
                     onClick={() => setKnots(true)}
                  >
                     <img
                        className="featured__img"
                        src={knotsImg}
                        alt="knots-4-you.png"
                     />
                  </button>
               )}
            </div>

            <div className="featured__txt-container">
               <a
                  href="https://the-irish-times.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <h3 className="featured__project">Knots 4 You</h3>
               </a>
               <div className="featured__techs-container">
                  <span className="featured__techs">ReactJS</span>
                  <span className="featured__techs">React Hooks</span>
                  <span className="featured__techs">Redux-Saga</span>
               </div>
            </div>
         </div>

         <div className="featured__card">
            <div className="featured__card-container">
               {catalog ? (
                  <div ref={ref} className="featured__proj-info">
                     <h4 className="featured__proj-info-title">
                        Project: Catalog of Books
                     </h4>
                     <p className="featured__proj-info-p">
                        An application where the user can search for books and
                        leave a review about the website.
                     </p>
                     <div className="featured__proj-info-btn">
                        <button
                           className="btn featured__btn"
                           onClick={() => {
                              window.open(
                                 "https://catalog-of-books.netlify.app/"
                              );
                           }}
                        >
                           View Project
                        </button>
                        <button
                           className="btn featured__btn"
                           onClick={() => {
                              window.open(
                                 "https://github.com/euguilhermegirardi/Catalog-of-Books"
                              );
                           }}
                        >
                           GitHub
                        </button>
                     </div>
                  </div>
               ) : (
                  <button
                     className="featured__img-container"
                     onClick={() => setCatalog(true)}
                  >
                     <img
                        className="featured__img"
                        src={catalogImg}
                        alt="catalog-of-books.png"
                     />
                  </button>
               )}
            </div>

            <div className="featured__txt-container">
               <a
                  href="https://the-irish-times.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <h3 className="featured__project">Catalog of Books</h3>
               </a>
               <div className="featured__techs-container">
                  <span className="featured__techs">ReactJS</span>
                  <span className="featured__techs">React Hooks</span>
                  <span className="featured__techs">React Hook Form</span>
               </div>
            </div>
         </div>

         <Link to="/projects" className="btn-container">
            <button className="btn">View all projects</button>
         </Link>
      </section>
   );
}
