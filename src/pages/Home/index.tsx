import React from "react";
import { FaDesktop, FaDatabase, FaSteamSquare, FaCheck } from "react-icons/fa";

import Nav from "../../components/Nav";
import "../../scss/pages/Home/_home.scss";
import profile from "../../assets/Home/profile.jpeg";
import globo from "../../assets/Home/globo-home-page.png";

export default function Home() {
   return (
      <>
         <Nav />
         <header className="header">
            <img className="header__img" src={profile} alt="profile-girardi" />
            <div className="header__profile">
               <span className="header__span">Hello, my name is</span>
               <h2 className="header__h2">Guilherme Girardi</h2>
               <p className="header__p">
                  My background is in Civil Engineering, yet I switched to the
                  field of IT, after seven years of experience in the
                  constructor sector. At first, my focus was on improving my
                  skills in HTML, CSS, and JavaScript but, currently, I am
                  studying ReactJS, Node.js, and React Native.
               </p>
               <button className="header__btn" type="button">
                  Hire Me
               </button>
            </div>
         </header>

         <main className="main">
            <h2 className="main__h2">Skills Overview</h2>
            <p className="main__p">
               I have more than 2 years' experience building rich web
               applications. Bellow is a quick overview of my main technical
               skill sets and tools I use. Want to find out more about my
               experience?{" "}
               <a className="main__anchor" href="/">
                  Check out my online resume.
               </a>
            </p>

            <div className="main__skill">
               <div className="main__icon-container">
                  <FaDesktop className="main__icon-main" />
               </div>
               <h3 className="main__skill-title">Frontend</h3>
               <ul className="main__ul">
                  <li className="main__li">
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">React/Redux/Redux-Saga</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">JavaScript</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">Gulp</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">CSS/SCSS</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">HTML</p>
                     </div>
                  </li>
               </ul>
            </div>

            <div className="main__skill">
               <div className="main__icon-container">
                  <FaDatabase className="main__icon-main" />
               </div>
               <h3 className="main__skill-title">Backend</h3>
               <ul className="main__ul">
                  <li className="main__li">
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">React/Redux/Redux-Saga</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">JavaScript</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">Gulp</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">CSS/SCSS</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">HTML</p>
                     </div>
                  </li>
               </ul>
            </div>

            <div className="main__skill">
               <div className="main__icon-container">
                  <FaSteamSquare className="main__icon-main" />
               </div>
               <h3 className="main__skill-title">Others</h3>
               <ul className="main__ul">
                  <li className="main__li">
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">React/Redux/Redux-Saga</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">JavaScript</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">Gulp</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">CSS/SCSS</p>
                     </div>
                     <div className="main__item">
                        <FaCheck className="main__svg" />
                        <p className="main__p">HTML</p>
                     </div>
                  </li>
               </ul>
            </div>
         </main>

         <section className="featured">
            <div className="featured__card">
               <img className="feature__img" src={globo} alt="" />
               <h3 className="featured__project">the-irish-sun-home-page</h3>
               <span className="featured__techs">HTML</span>
               <span className="featured__techs">CSS</span>
               <span className="featured__techs">VanillaJS</span>
            </div>
         </section>
      </>
   );
}
