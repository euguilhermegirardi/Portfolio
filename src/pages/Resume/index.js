import React from "react";

import Nav from "../../components/Nav";
import Header from "./sections/header";
import Info from "./sections/info";
import Summary from "./sections/summary";
import Experience from "./sections/resume";
import Footer from "../../components/Footer";

export default function Resume() {
   return (
      <>
         <Nav />
         <Header />
         <Info />
         <Summary />
         <Experience />
         <Footer />
      </>
   );
}
