import React from "react";
import { FaDesktop, FaDatabase, FaSteamSquare, FaCheck } from "react-icons/fa";

import Nav from "../../components/Nav";
import "../../scss/pages/Home/_home.scss";
import "../../scss/utils/_utilities.scss";
import profile from "../../assets/Home/profile.jpeg";
import theSun from "../../assets/Home/the-irish-sun.png";
import catalog from "../../assets/Home/catalog-of-books.png";
import knots from "../../assets/Home/knots-4-you.png";

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
               <button className="btn" type="button">
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

            <div className="main__skill main__skill--last">
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

         <section className="info">
            <img className="info__img" src={profile} alt="profile.jpeg" />
            <div className="info__txt-container">
               <h2 className="info__h2">
                  Interested in hiring me for your project?
               </h2>
               <p className="info__p">
                  Looking for an experienced frontend developer to build your
                  web app or ship your software product? To start an initial
                  chat, just drop me an email at{" "}
                  <a className="info__email" href="/">
                     girardi.gui@icloud.com
                  </a>{" "}
                  or use the <a href="/">form on the contact page</a>.
               </p>
            </div>
            <button className="btn">Let's Talk!</button>
         </section>
      </>
   );
}
