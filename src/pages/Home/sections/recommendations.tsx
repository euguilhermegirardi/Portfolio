import React from "react";
import TinySlider from "tiny-slider-react";
import { FaQuoteLeft, FaLinkedinIn } from "react-icons/fa";

import "../../../scss/pages/Home/_recommendations.scss";
import thiago from "../../../assets/Home/thiago.jpeg";
import daniel from "../../../assets/Home/daniel.jpeg";
import bruno from "../../../assets/Home/bruno.jpeg";

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
            <TinySlider settings={settings}>
               <div className="card">
                  <FaQuoteLeft className="card__quote" />
                  <p className="card__txt">
                     I had the pleasure to introduce programming for Guilherme,
                     he collaborated on countless web projects. I've never
                     encountered someone as positive and motivated as he is. he
                     is also extremely passionate about his job with great
                     attention to detail no matter what kind of project was
                     thrown at him. He made working on a team with him very
                     enjoyable, any team would be lucky to have him!
                  </p>
                  <img
                     className="card__avatar"
                     src={thiago}
                     alt="thiago.jpeg"
                  />
                  <p className="card__name">Thiago Baptistella</p>
                  <p className="card__position">Software Developer</p>
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
                  <FaQuoteLeft className="card__quote" />
                  <p className="card__txt">
                     If you look for a young passionate, aspiring developer take
                     a closer look at him. I found him on Instagram and was
                     interested from the beginning. We started to write as
                     "Instagram strangers" and now I would say its a friendship.
                     He is smart, learns really fast, has a real good technical
                     understanding, works independent and precisely. The only
                     thing he has to learn a bit more is to be more confident.
                  </p>
                  <img
                     className="card__avatar"
                     src={daniel}
                     alt="daniel.jpeg"
                  />
                  <p className="card__name">Daniel Murth</p>
                  <p className="card__position">Full Stack Web Developer</p>
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
                  <FaQuoteLeft className="card__quote" />
                  <p className="card__txt">
                     Guilherme Girardi is a high-motivated and fast-learner
                     team-player. On the projects we have worked on, he had
                     shown amazing perseverance and willingness to contribute
                     the highest quality code and creative ideas. He would not
                     save any effort to achieve an efficient, modern and elegant
                     architecture. Any team he may join, will instantly benefit
                     from his excellent talent.
                  </p>
                  <img className="card__avatar" src={bruno} alt="bruno.jpeg" />
                  <p className="card__name">Bruno Miguel</p>
                  <p className="card__position">Software Engineer</p>
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
            </TinySlider>
         </section>
      </>
   );
}