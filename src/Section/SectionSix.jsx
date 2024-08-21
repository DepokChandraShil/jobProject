import React from "react";

const SectionSix = () => {
  const divData = [
    {
      title: "FaResearchgate",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      title: "FaResearchgate",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      title: "FaResearchgate",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      title: "FaResearchgate",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <div className="w-full bg-[#0a0368]">
      <div className="mt-10 flex max-sm:flex-col items-center justify-center gap-5">
        {divData.map((item, i) => (
          <div key={i} className=" flex flex-col items-center justify-center w-[250px] mt-5  max-sm:w-full max-sm:h-auto">
            <div className="h-[100px] w-[100px] items-center border rounded-full mt-10  bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"></div>

            <h3 className="text-3xl font-semibold mt-5 text-slate-200">
              {item.title}
            </h3>
            <p className=" text-xl font-semibold mt-5 text-slate-200">
              {item.para}
            </p>
            <button className="mb-10 text-white font-bold mt-5 cursor-pointer bg-orange-500 px-8 py-2 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
              1st Step
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSix;
