import React, { useState } from "react";
import SectionOne from "../Section/SectionOne";
import SectionTwo from "../Section/SectionTwo";
import SectionThree from "../Section/SectionThree";


const Home = () => {


  return (
    <div className="container bg-blue-50 w-full">
      <section className="w- bg-blue-50">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </section>
    </div>
  );
};

export default Home;
