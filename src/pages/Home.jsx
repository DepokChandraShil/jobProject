import React, { useState } from "react";
import SectionOne from "../Section/SectionOne";
import SectionTwo from "../Section/SectionTwo";
import SectionThree from "../Section/SectionThree";
import SectionFour from "../Section/SectionFour";
import SectionFive from "../Section/SectionFive";
import SectionSix from "../Section/SectionSix";
import SectionSeven from "../Section/SectionSeven";
import SectionEight from "../Section/SectionEight";
const Home = () => {


  return (
    <div className="container bg-blue-50 w-full">
      <section className="bg-blue-50">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
      </section>
    </div>
  );
};

export default Home;
