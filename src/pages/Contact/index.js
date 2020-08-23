import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";

import "../../scss/pages/Contact/_profile.scss";
import "../../scss/pages/Contact/_form.scss";
import Nav from "../../components/Nav";
import profile from "../../assets/Home/profile.jpeg";
import Footer from "../../components/Footer";

export default function Contact({ history }) {
   const encode = (data) => {
      return Object.keys(data)
         .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
         )
         .join("&");
   };

   const { handleSubmit, register, errors } = useForm();
   const onSubmit = (values, e) => {
      e.preventDefault();

      console.log(values);

      fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contact", values })
       })
         // .then(() => history.push("/success"))
         .then(() => alert('Success'))
         .catch(error => alert(error));
   }

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
               // autoComplete="off"
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
                           placeholder="* Name"
                           name="name"
                           ref={register({
                              required: "Required",
                              pattern: {
                                 maxLength: 20,
                                 message: "invalid name."
                              }
                           })}
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
                           ref={register({
                              required: "Required",
                              pattern: {
                                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                 message: "invalid email address"
                              }
                           })}
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
                           ref={register({
                              required: "Required",
                              pattern: {
                                 maxLength: 10000,
                                 message: "Please, leave a message!"
                              }
                           })}
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
