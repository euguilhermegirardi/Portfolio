import React from "react";
import { Link } from "react-router-dom";

import "../../scss/pages/Success/_success.scss";

export default function Success() {
   return (
      <>
         <section className="success">
            <div className="success-container">
               <h2 className="success__h2">
                  Thank you very much for sending me this message!
               </h2>
               <p className="success__p">
                  I will get back to you as soon as possible! Have a nice day!
               </p>

               <button className="btn">
                  <Link to="/">Back to Home</Link>
               </button>
            </div>
         </section>
      </>
   );
}
