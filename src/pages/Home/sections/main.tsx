import React from "react";
import { Link } from "react-router-dom";
import { FaDesktop, FaDatabase, FaSteamSquare, FaCheck } from "react-icons/fa";

import "../../../scss/pages/Home/_main.scss";

export default function Main() {
   return (
      <main className="main">
         <div className="container">
            <div className="main__txt-container">
               <h2 className="h2">Skills Overview</h2>
               <p className="paragraph main__p">
                  I have more than 2 years' experience building rich web
                  applications. Bellow is a quick overview of my main technical
                  skill sets and tools I use. Want to find out more about my
                  experience?{" "}
                  <Link className="main__anchor" to="/resume">
                     Check out my online resume.
                  </Link>
               </p>
            </div>

            <div className="main__container">
               <div className="main__skill">
                  <div className="main__icon-container">
                     <FaDesktop className="main__icon-main" />
                  </div>
                  <h3 className="main__skill-title">Frontend</h3>
                  <ul className="main__ul">
                     <li className="main__li">
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">ReactJS</p>
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
                  <small className="main__skill-small">(basic)</small>
                  <ul className="main__ul">
                     <li className="main__li">
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">Node.js</p>
                        </div>
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">Express.js</p>
                        </div>
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">MongoDB</p>
                        </div>
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">SQLite</p>
                        </div>
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">Knex.js</p>
                        </div>
                     </li>
                  </ul>
               </div>

               <div className="main__skill main__skill--last">
                  <div className="main__icon-container">
                     <FaSteamSquare className="main__icon-main" />
                  </div>
                  <h3 className="main__skill-title">Others</h3>
                  <small className="main__skill-small">(basic)</small>
                  <ul className="main__ul">
                     <li className="main__li">
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">Redux-Saga</p>
                        </div>
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">React Native</p>
                        </div>
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">TypeScript</p>
                        </div>
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">MVC Design Pattern</p>
                        </div>
                        <div className="main__item">
                           <FaCheck className="main__svg" />
                           <p className="main__p">Insomnia</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </main>
   );
}
