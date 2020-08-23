import React from "react";

import Nav from "../../components/Nav";
import Header from "./sections/header";
import Main from "./sections/main";
import Recommendations from "./sections/recommendations";
import Featured from "./sections/featured";
import Info from "./sections/info";
import Footer from "../../components/Footer";

export default function Home() {
   return (
      <>
         <Nav />
         <Header />
         <Main />
         <Recommendations />
         <Featured />
         <Info />
         <Footer />
      </>
   );
}
