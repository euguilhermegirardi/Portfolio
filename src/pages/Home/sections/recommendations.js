import React from "react";
import TinySlider from "tiny-slider-react";
import { FaQuoteLeft, FaLinkedinIn } from "react-icons/fa";

import "../../../scss/pages/Home/_recommendations.scss";
import thiago from "../../../assets/Recommendations/thiago.jpeg";
import daniel from "../../../assets/Recommendations/daniel.jpeg";
import bruno from "../../../assets/Recommendations/bruno.jpeg";
import felipe from "../../../assets/Recommendations/felipe.jpeg";

export default function Recommendations() {
   const settings = {
      nav: false,
      mouseDrag: true,
      controls: true,
      controlsText: ["<", ">"],
   };

   return (
      <>
         <section className="card-container">
            <div className="container">
               <TinySlider settings={settings}>
                  <div className="card">
                     <div className="card__quote-container">
                        <FaQuoteLeft className="card__quote" />
                     </div>
                     <p className="card__txt">
                        I had the pleasure to introduce programming for
                        Guilherme, he collaborated on countless web projects.
                        I've never encountered someone as positive and motivated
                        as he is. he is also extremely passionate about his job
                        with great attention to detail no matter what kind of
                        project was thrown at him. He made working on a team
                        with him very enjoyable, any team would be lucky to have
                        him!
                     </p>
                     <div className="card__profile-container">
                        <img
                           className="card__avatar"
                           src={thiago}
                           alt="thiago.jpeg"
                        />
                        <div className="card__profile-txt-container">
                           <p className="card__name">Thiago Baptistella</p>
                           <p className="card__position">Software Developer</p>
                        </div>
                     </div>
                     <div className="card__linkedin">
                        <a
                           className="card__link"
                           target="_blank"
                           rel="noopener noreferrer"
                           href="https://www.linkedin.com/in/thiago-baptistella-29b52571/"
                        >
                           <FaLinkedinIn className="card__link-icon" />
                           <p className="card__link-p">LinkedIn Profile</p>
                        </a>
                     </div>
                  </div>

                  <div className="card">
                     <div className="card__quote-container">
                        <FaQuoteLeft className="card__quote" />
                     </div>
                     <p className="card__txt">
                        If you look for a young passionate, aspiring developer
                        take a closer look at him. I found him on Instagram and
                        was interested from the beginning. We started to write
                        as "Instagram strangers" and now I would say its a
                        friendship. He is smart, learns really fast, has a real
                        good technical understanding, works independent and
                        precisely. The only thing he has to learn a bit more is
                        to be more confident.
                     </p>
                     <div className="card__profile-container">
                        <img
                           className="card__avatar"
                           src={daniel}
                           alt="daniel.jpeg"
                        />
                        <div className="card__profile-txt-container">
                           <p className="card__name">Daniel Murth</p>
                           <p className="card__position">
                              Full Stack Web Developer
                           </p>
                        </div>
                     </div>
                     <div className="card__linkedin">
                        <a
                           className="card__link"
                           target="_blank"
                           rel="noopener noreferrer"
                           href="https://www.linkedin.com/in/daniel-murth-b6b86a188/"
                        >
                           <FaLinkedinIn className="card__link-icon" />
                           <p className="card__link-p">LinkedIn Profile</p>
                        </a>
                     </div>
                  </div>

                  <div className="card">
                     <div className="card__quote-container">
                        <FaQuoteLeft className="card__quote" />
                     </div>
                     <p className="card__txt">
                        Guilherme Girardi is a high-motivated and fast-learner
                        team-player. On the projects we have worked on, he had
                        shown amazing perseverance and willingness to contribute
                        the highest quality code and creative ideas. He would
                        not save any effort to achieve an efficient, modern and
                        elegant architecture. Any team he may join, will
                        instantly benefit from his excellent talent.
                     </p>
                     <div className="card__profile-container">
                        <img
                           className="card__avatar"
                           src={bruno}
                           alt="bruno.jpeg"
                        />
                        <div className="card__profile-txt-container">
                           <p className="card__name">Bruno Miguel</p>
                           <p className="card__position">Software Engineer</p>
                        </div>
                     </div>
                     <div className="card__linkedin">
                        <a
                           className="card__link"
                           target="_blank"
                           rel="noopener noreferrer"
                           href="https://www.linkedin.com/in/bruno-miguel-7210b814a/"
                        >
                           <FaLinkedinIn className="card__link-icon" />
                           <p className="card__link-p">LinkedIn Profile</p>
                        </a>
                     </div>
                  </div>

                  <div className="card">
                     <div className="card__quote-container">
                        <FaQuoteLeft className="card__quote" />
                     </div>
                     <p className="card__txt">
                        Guilherme has always been an excellent working partner,
                        he has never spared efforts in project development.
                        Incredible his learning capacity and also his tireless
                        search for knowledge, he always cares to help the team
                        and shows himself to be a good leader in the face of
                        problems that arise. I'm sure he will always have a lot
                        to contribute to whatever team he is on.
                     </p>
                     <div className="card__profile-container">
                        <img
                           className="card__avatar"
                           src={felipe}
                           alt="felipe.jpeg"
                        />
                        <div className="card__profile-txt-container">
                           <p className="card__name">
                              Felipe Baraldi Deziderio
                           </p>
                           <p className="card__position">Backend Developer</p>
                        </div>
                     </div>
                     <div className="card__linkedin">
                        <a
                           className="card__link"
                           target="_blank"
                           rel="noopener noreferrer"
                           href="https://www.linkedin.com/in/felipebaraldi/"
                        >
                           <FaLinkedinIn className="card__link-icon" />
                           <p className="card__link-p">LinkedIn Profile</p>
                        </a>
                     </div>
                  </div>
               </TinySlider>
            </div>
         </section>
      </>
   );
}
