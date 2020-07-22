import React from "react";
import { Link } from "react-router-dom";
import {
   FaFileDownload,
   FaMobileAlt,
   FaLinkedin,
   FaGithubSquare,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import "../../scss/pages/Resume/_header.scss";
import "../../scss/pages/Resume/_info.scss";
import "../../scss/pages/Resume/_summary.scss";
import "../../scss/pages/Resume/_resume.scss";
import profile from "../../assets/Home/profile.jpeg";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Resume() {
   return (
      <>
         <Nav />
         <header className="header">
            <h2 className="h2">Resume</h2>
            <button className="btn header__btn">
               <FaFileDownload />
               <Link to="/Resume/curriculum.pdf" target="_blank" download>
                  Download PDF Version
               </Link>
            </button>
         </header>

         <section className="info info--resume">
            <img
               className="info__img--resume"
               src={profile}
               alt="profile.jpeg"
            />
            <h2 className="h2 info__h2">Guilherme Girardi</h2>
            <h3 className="info__h3">Frontend Developer</h3>
            <div className="info__small-container">
               <AiOutlineMail className="info__icon" />
               <small className="info__small">girardi.gui@icloud.com</small>
            </div>
            <div className="info__small-container">
               <FaMobileAlt className="info__icon" />
               <small className="info__small">+353 083 380 0087</small>
            </div>
            <div className="info__small-container">
               <a
                  className="info__anchor"
                  href="https://www.linkedin.com/in/guilherme-girardi-1aa6a1185/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaLinkedin className="info__icon" />
                  <small className="info__small">
                     linkedin.com/in/guilherme-girardi
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
                  <FaGithubSquare className="info__icon" />
                  <small className="info__small">
                     github.com/euguilhermegirardi
                  </small>
               </a>
            </div>
         </section>

         <section className="summary">
            <h3 className="summary__h3">Career Summary</h3>

            <p className="summary__p">
               My background is in Civil Engineering, yet I switched to the
               field of IT, after seven years of experience in the constructor
               sector. At first, my focus was on improving my skills in HTML,
               CSS, and JavaScript but, currently, I am studying ReactJS,
               Node.js, and React Native. Besides, I am working on personal
               projects to show the knowledge I have acquired along this
               journey. I am a positive, open-minded, and fast learner person. I
               am giving it my all since I left a career behind, and found in IT
               my passion. It makes me happy that every day I feel motivated to
               learn something new to add to my projects.
            </p>
         </section>

         <section className="resume">
            <h3 className="summary__h3">Work Experience</h3>

            <div className="resume__timeline">
               <article className="resume__article">
                  <div className="resume__article-title">
                     <h4 className="resume__article-h4">Frontend Developer</h4>
                  </div>
                  <div className="resume__article-company">
                     <small className="resume__article-small">
                        Home Office
                     </small>
                  </div>
                  <div className="resume__article-date">
                     <span className="resume__article-span">
                        2018 - Present
                     </span>
                  </div>

                  <div className="resume__description">
                     <p className="paragraph resume__p">
                        Working on a range of web projects to improve my skills,
                        developing series of HTML, CSS, JavaScript and ReactJS,
                        React Native and Node.js. Identifying problems and bugs
                        in the code and quickly resolving the problems.
                     </p>
                  </div>
               </article>

               <article className="resume__article">
                  <div className="resume__article-title">
                     <h4 className="resume__article-h4">Site Civil Engineer</h4>
                  </div>
                  <div className="resume__article-company">
                     <small className="resume__article-small">
                        PKT Engineering
                     </small>
                  </div>
                  <div className="resume__article-date">
                     <span className="resume__article-span">2015 - 2017</span>
                  </div>

                  <div className="resume__description">
                     <p className="paragraph resume__p">
                        Monitoring of all services performed according to the
                        appropriate execution projects, monitoring of the
                        physical and supply schedules, the budget of the
                        services to be executed and of the materials, purchase
                        of materials, preparation of weekly reports, supervision
                        of the work safety of all employees, and review of
                        projects.
                     </p>
                  </div>
               </article>

               <article className="resume__article">
                  <div className="resume__article-title">
                     <h4 className="resume__article-h4">Frontend Developer</h4>
                  </div>
                  <div className="resume__article-company">
                     <small className="resume__article-small">
                        Site Civil Engineering
                     </small>
                  </div>
                  <div className="resume__article-date">
                     <span className="resume__article-span">2013 - 2015</span>
                  </div>

                  <div className="resume__description">
                     <p className="paragraph resume__p">
                        Follow-up of the services carried out in the works
                        according to the execution project physical schedule,
                        preparation of measurement, weekly and photographic
                        reports, responsible for requesting material purchases,
                        monitoring the financial schedule, supervising employee
                        safety, and reviewing projects.
                     </p>
                  </div>
               </article>
            </div>
         </section>
         <Footer />
      </>
   );
}
