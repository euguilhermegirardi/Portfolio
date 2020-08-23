import React from "react";
import { Link } from "react-router-dom";

import "../../../scss/pages/Home/_header.scss";
import profile from "../../../assets/Home/profile.jpeg";

export default function Header() {
   return (
      <header className="header">
         <div className="container">
            <div className="header__container">
               <img
                  className="header__img"
                  src={profile}
                  alt="profile-girardi"
               />
               <div className="header__profile">
                  <span className="header__span">Hello, my name is</span>
                  <h2 className="header__h2">Guilherme Girardi</h2>
                  <p className="header__p">
                     My background is in Civil Engineering, yet I switched to
                     the field of IT, after seven years of experience in the
                     constructor sector. At first, my focus was on improving my
                     skills in HTML, CSS, and JavaScript but, currently, I am
                     studying ReactJS, Node.js, and React Native.
                  </p>

                  <Link className="btn" to="/contact">
                     Hire Me
                  </Link>
               </div>
            </div>
         </div>
      </header>
   );
}
