import React from "react";

import "../../../scss/pages/Resume/_resume.scss";

export default function Resume() {
   return (
      <div className="container">
         <section className="resume">
            <div className="resume__container">
               <h3 className="summary__h3">Work Experience</h3>

               <div className="resume__timeline">
                  <article className="resume__article">
                     <div className="resume__article-title">
                        <h4 className="resume__article-h4">
                           Freelance Front-End Developer (part-time)
                        </h4>
                     </div>
                     <div className="resume__article-company">
                        <small className="resume__article-small">
                           Cognitic.ie
                        </small>
                     </div>
                     <div className="resume__article-date">
                        <span className="resume__article-span">
                           2020 - Present
                        </span>
                     </div>

                     <div className="resume__description">
                        <p className="paragraph resume__p">
                           Working with a team of developers to build user interface.
                           Designing and implementing the front-end using ReactJS.
                        </p>
                     </div>
                  </article>

                  <article className="resume__article">
                     <div className="resume__article-title">
                        <h4 className="resume__article-h4">
                           Front-End Developer (full-time)
                        </h4>
                     </div>
                     <div className="resume__article-company">
                        <small className="resume__article-small">
                           Easy Dish Ltd.
                        </small>
                     </div>
                     <div className="resume__article-date">
                        <span className="resume__article-span">
                           2020 - Present
                        </span>
                     </div>

                     <div className="resume__description">
                        <p className="paragraph resume__p">
                           Developing a web application using ReactJS starting from model design.
                           Working closely with the commercial and Back-End teams to identify and quickly resolve problems and bugs in the code.
                        </p>
                     </div>
                  </article>

                  <article className="resume__article">
                     <div className="resume__article-title">
                        <h4 className="resume__article-h4">
                           Self-Taught Front-End Developer
                        </h4>
                     </div>
                     <div className="resume__article-company">
                        <small className="resume__article-small">
                           Home Office
                        </small>
                     </div>
                     <div className="resume__article-date">
                        <span className="resume__article-span">
                           2018 - 2020
                        </span>
                     </div>

                     <div className="resume__description">
                        <p className="paragraph resume__p">
                           Working on a range of web projects to improve my
                           skills, developing series of HTML, CSS, JavaScript
                           and ReactJS, React Native and Node.js. Identifying
                           problems and bugs in the code and quickly resolving
                           the problems.
                        </p>
                     </div>
                  </article>

                  <article className="resume__article">
                     <div className="resume__article-title">
                        <h4 className="resume__article-h4">
                           Site Civil Engineer
                        </h4>
                     </div>
                     <div className="resume__article-company">
                        <small className="resume__article-small">
                           PKT Engineering
                        </small>
                     </div>
                     <div className="resume__article-date">
                        <span className="resume__article-span">
                           2015 - 2017
                        </span>
                     </div>

                     <div className="resume__description">
                        <p className="paragraph resume__p">
                           Monitoring of all services performed according to the
                           appropriate execution projects, monitoring of the
                           physical and supply schedules, the budget of the
                           services to be executed and of the materials,
                           purchase of materials, preparation of weekly reports,
                           supervision of the work safety of all employees, and
                           review of projects.
                        </p>
                     </div>
                  </article>
               </div>
            </div>
         </section>
      </div>
   );
}
