import React, { useState } from "react";
import SectionOne from "../Section/SectionOne";
import SectionTwo from "../Section/SectionTwo";
import SectionThree from "../Section/SectionThree";
import SectionFour from "../Section/SectionFour";


const Home = () => {


  return (
    <div className="container bg-blue-50 w-full">
      <section className="bg-blue-50">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </section>
    </div>
  );
};

export default Home;
