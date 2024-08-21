import React, { useState } from "react";
import SectionOne from "../Section/SectionOne";
import SectionTwo from "../Section/SectionTwo";
import SectionThree from "../Section/SectionThree";
import SectionFour from "../Section/SectionFour";
import SectionFive from "../Section/SectionFive";
import SectionSix from "../Section/SectionSix";
import SectionSeven from "../Section/SectionSeven";
import SectionEight from "../Section/SectionEight";
import SectionNine from "../Section/SectionNine";
import SectionTen from "../Section/SectionTen";
const Home = () => {


  return (
    <div className="container bg-blue-50 m-auto w-full">
      <section className="bg-blue-50">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen />
      </section>
    </div>
  );
};

export default Home;
