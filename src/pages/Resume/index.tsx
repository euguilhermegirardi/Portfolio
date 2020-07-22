import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Resume() {
   return (
      <>
         <Nav />
         <Link to="/Resume/curriculum.pdf" target="_blank" download>
            Download
         </Link>
         <Footer />
      </>
   );
}
