import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
   FaMobileAlt,
   FaLinkedin,
   FaGithubSquare,
   FaInstagramSquare,
} from "react-icons/fa";

import "../../../scss/pages/Resume/_info.scss";
import profile from "../../../assets/Home/profile.jpeg";

export default function Info() {
   return (
      <section className="info-resume">
         <div className="info-resume__container">
            <img
               className="info__img--resume"
               src={profile}
               alt="profile.jpeg"
            />
            <div className="info__container info__container--resume">
               <div className="info__profile-container">
                  <h2 className="h2 info__h2">Guilherme Girardi</h2>
                  <h3 className="info__h3">Frontend Developer</h3>
                  <div className="info__small-container">
                     <div className="info__icon-container">
                        <AiOutlineMail className="info__icon" />
                     </div>
                     <small className="info__small">
                        girardi.gui@icloud.com
                     </small>
                  </div>
                  <div className="info__small-container">
                     <div className="info__icon-container">
                        <FaMobileAlt className="info__icon" />
                     </div>
                     <small className="info__small">+353 083 380 0087</small>
                  </div>
               </div>
               <div className="info__media-container">
                  <div className="info__small-container">
                     <a
                        className="info__anchor"
                        href="https://www.linkedin.com/in/guilherme-girardi-1aa6a1185/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className="info__icon-container">
                           <FaLinkedin className="info__icon" />
                        </div>
                        <small className="info__small">
                           linkedin.com/in/guilherme-girardi-1aa6a1185/
                        </small>
                     </a>
                  </div>
                  <div className="info__small-container">
                     <a
                        className="info__anchor"
                        href="https://github.com/euguilhermegirardi"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className="info__icon-container">
                           <FaGithubSquare className="info__icon" />
                        </div>
                        <small className="info__small">
                           github.com/euguilhermegirardi
                        </small>
                     </a>
                  </div>
                  <div className="info__small-container">
                     <a
                        className="info__anchor"
                        href="https://www.instagram.com/euguilhermegirardi/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className="info__icon-container">
                           <FaInstagramSquare className="info__icon" />
                        </div>
                        <small className="info__small">
                           instagram.com/euguilhermegirardi/
                        </small>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
