import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

import "../../scss/pages/Contact/_profile.scss";
import "../../scss/pages/Contact/_form.scss";
import Nav from "../../components/Nav";
import profile from "../../assets/Home/profile.jpeg";
import Footer from "../../components/Footer";

export default function Contact() {
   return (
      <>
         <Nav />
         <section className="profile">
            <img className="profile__img" src={profile} alt="profile.jpeg" />
            <div className="profile__description">
               <p className="paragraph">
                  I'm currently taking on freelance work. If you are interested
                  in hiring me for your project or company please use the form
                  below to get in touch.
               </p>
               <small className="profile__small">
                  You can also find me on the following channels
               </small>
               <div className="profile__icons">
                  <FaLinkedinIn className="profile__icon" />
                  <FaGithub className="profile__icon" />
                  <FaInstagram className="profile__icon" />
               </div>
            </div>
         </section>

         <form
            className="form"
            name="contact"
            method="POST"
            data-netlify="true"
         >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form__container">
               <h2 className="h2">Get In Touch</h2>
               <div className="form__row">
                  <div className="form__input-container">
                     <label htmlFor="#">Name</label>
                     <input
                        type="text"
                        className="form__input"
                        name="name"
                        placeholder="Name"
                        minLength={2}
                        required
                     />
                  </div>

                  <div className="form__input-container">
                     <label htmlFor="#">Email</label>
                     <input
                        type="email"
                        className="form__input"
                        name="email"
                        placeholder="Email"
                        required
                     />
                  </div>

                  <div className="form__input-container">
                     <label htmlFor="#">Your Message</label>
                     <textarea
                        className="form__input"
                        name="message"
                        placeholder="Enter your message"
                        cols={30}
                        rows={10}
                        required
                     ></textarea>
                  </div>
               </div>

               <button className="btn" type="submit">
                  <Link to="success">Send</Link>
               </button>
            </div>
         </form>
         <Footer />
      </>
   );
}
