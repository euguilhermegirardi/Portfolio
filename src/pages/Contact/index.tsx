import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

import "../../scss/pages/Contact/_profile.scss";
import "../../scss/pages/Contact/_form.scss";
import Nav from "../../components/Nav";
import profile from "../../assets/Home/profile.jpeg";
import Footer from "../../components/Footer";

interface IFormInputs {
   name: string;
   email: string;
   message: string;
}

const SignupSchema = yup.object().shape({
   name: yup.string().required(),
   email: yup.string().required(),
   message: yup.string().required(),
});

export default function Contact({ history }) {
   const { register, handleSubmit, errors } = useForm<IFormInputs>({
      resolver: yupResolver(SignupSchema),
   });

   const onSubmit = (data: IFormInputs) => {
      history.push("/success");
   };

   return (
      <>
         <Nav />
         <section className="profile">
            <div className="container">
               <div className="profile__container">
                  <img
                     className="profile__img"
                     src={profile}
                     alt="profile.jpeg"
                  />
                  <div className="profile__description">
                     <p className="paragraph">
                        I'm currently taking on freelance work. If you are
                        interested in hiring me for your project or company
                        please use the form below to get in touch.
                     </p>
                     <small className="profile__small">
                        You can also find me on the following channels
                     </small>
                     <div className="profile__icons">
                        <a
                           href="https://www.linkedin.com/in/guilherme-girardi-1aa6a1185/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaLinkedinIn className="profile__icon" />
                        </a>
                        <a
                           href="https://github.com/euguilhermegirardi"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaGithub className="profile__icon" />
                        </a>
                        <a
                           href="https://www.instagram.com/euguilhermegirardi/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaInstagram className="profile__icon" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className="container">
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="form"
               name="contact"
               method="POST"
               action="POST"
               data-netlify="true"
               data-netlify-honeypot="bot-field"
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
                           placeholder="* Name"
                           minLength={2}
                           name="name"
                           ref={register}
                        />
                        {errors.name && (
                           <p className="form__error">{errors.name.message}</p>
                        )}
                     </div>

                     <div className="form__input-container">
                        <label htmlFor="#">Email</label>
                        <input
                           type="email"
                           className="form__input"
                           placeholder="* Email"
                           name="email"
                           ref={register}
                        />
                        {errors.email && (
                           <p className="form__error">{errors.email.message}</p>
                        )}
                     </div>

                     <div className="form__input-container">
                        <label htmlFor="#">Your Message</label>
                        <textarea
                           className="form__input"
                           placeholder="* Enter your message"
                           cols={30}
                           rows={10}
                           minLength={5}
                           name="message"
                           ref={register}
                        />
                        {errors.message && (
                           <p className="form__error">
                              {errors.message.message}
                           </p>
                        )}
                     </div>

                     <small className="form__required">* Required fields</small>
                  </div>

                  <button className="btn" type="submit">
                     Send
                  </button>
               </div>
            </form>
         </div>

         <Footer />
      </>
   );
}
