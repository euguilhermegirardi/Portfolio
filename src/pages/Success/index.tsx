import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Success() {
   return (
      <>
         <Nav />
         <section className="success">
            <div className="success-container">
               <h2>Thanks!</h2>
            </div>
         </section>
         <Footer />
      </>
   );
}
