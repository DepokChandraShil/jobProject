import React from "react";

const SectionTwo = () => {
  return (
    <div className="flex max-sm:flex-col justify-center items-center gap-5 w-ful mt-20">
      <div className="w-[350px] max-sm:w-[350px] h-[450px] bg-blue-100 border rounded-md">
        <img
          src="/card1.png"
          alt="Logo"
          className="pt-10 w-[290px] h-[300px] mx-auto"
        />
        <h1 className="text-center font-medium text-2xl py-3">
          Online Marketing
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          cumque consequatur exercitationem officia nulla?
        </p>
      </div>
      <div className="w-[350px] max-sm:w-[350px] h-[450px] bg-blue-100 border rounded-md">
        <img
          src="/card2.png"
          alt="Logo"
          className="pt-10 w-[290px] h-[300px] mx-auto"
        />
        <h1 className="text-center font-medium text-2xl py-3">
          Data Analysis
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          cumque consequatur exercitationem officia nulla?
        </p>
      </div>
      <div className="w-[350px] max-sm:w-[350px] h-[450px] bg-blue-100 border rounded-md">
        <img
          src="/card3.png"
          alt="Logo"
          className="pt-10 w-[290px] h-[300px] mx-auto"
        />
        <h1 className="text-center font-medium text-2xl py-3">
          SEO optimization
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          cumque consequatur exercitationem officia nulla?
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
