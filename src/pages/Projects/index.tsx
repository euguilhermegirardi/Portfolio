import React from "react";

import Nav from "../../components/Nav";
import Header from "./sections/header";
import Featured from "./sections/featured";
import Info from "../../pages/Home/sections/info";
import Footer from "../../components/Footer";

export default function Projects() {
   return (
      <>
         <Nav />
         <Header />
         <Featured />
         <Info />
         <Footer />
      </>
   );
}
