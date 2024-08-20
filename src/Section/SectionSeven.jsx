import React from "react";

const SectionSeven = () => {
  const sectionSevenData = [
    {
      title: "Basic",
      para: [
        { p1: "Increase Traffic 130%" },
        { p2: "SEO Optimization" },
        { p3: "Social Media Management" },
        { p4: "Content Marketing" },
        { p5: "24/7 Hours Support" },
      ],
      price: "20",
    },
    {
      title: "Premium",
      para: [
        { p1: "Increase Traffic 1300%" },
        { p2: "SEO Optimization" },
        { p3: "Social Media Management" },
        { p4: "Content Marketing" },
        { p5: "24/7 Hours Support" },
      ],
      price: "20",
    },
    {
      title: "advance",
      para: [
        { p1: "Increase Traffic 13000%" },
        { p2: "SEO Optimization" },
        { p3: "Social Media Management" },
        { p4: "Content Marketing" },
        { p5: "24/7 Hours Support" },
      ],
      price: "20",
    },
  ];
  return (
    <div className="w-full  flex items-center justify-center gap-5">
      <div className="w-8/12 gap-5 mb-5 mt-5 ml-5   flex items-center justify-center">
        <div className="w-1/3 bg-blue-100 text-left border rounded-md p-5">
          <h1 className="text-4xl mb-2">Basic</h1>
          {sectionSevenData[1].para.map((paraData, index) => (
            <div key={index} className="flex items-center mt-5 mb-5">
              <div className="h-5 w-3 border border-black ml-2 mr-5 "></div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p1}</div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p2}</div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p3}</div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p4}</div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p5}</div>
            </div>
          ))}
          <div>
            <span className="text-2xl">$</span>
            <span className="text-5xl font-bold">25</span>
            <span className="text-slate-600">/month</span>
          </div>
          <button className="mb-10 text-white font-bold mt-5 cursor-pointer bg-orange-500 px-8 py-2 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
            Choose a plan
          </button>
        </div>
        <div className=" realtive  w-1/3 bg-blue-100 text-left border rounded-md p-5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
         <h1 className="text-4xl mt-5">Premium</h1>
          {sectionSevenData[1].para.map((paraData, index) => (
            <div key={index} className="flex items-center mt-5 mb-5">
              <div className="h-5 w-3 border border-black ml-2 mr-5 "></div>
              <div className=" text-xs font-bold text-black ">{paraData.p1}</div>
              <div className=" text-xs font-bold text-black ">{paraData.p2}</div>
              <div className=" text-xs font-bold text-black ">{paraData.p3}</div>
              <div className=" text-xs font-bold text-black ">{paraData.p4}</div>
              <div className=" text-xs font-bold text-black ">{paraData.p5}</div>
            </div>
          ))}
          <div>
            <span className="text-2xl">$</span>
            <span className="text-5xl font-bold">45</span>
            <span className="text-slate-600">/month</span>
          </div>
          <button className="mb-10 text-white font-bold mt-5 cursor-pointer bg-orange-500 px-8 py-2 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
            Choose a plan
          </button>
        </div>
        <div className="w-1/3 bg-blue-100 text-left border rounded-md p-5">
          <h1 className="text-4xl mb-2">Basic</h1>
          {sectionSevenData[1].para.map((paraData, index) => (
            <div key={index} className="flex items-center mt-5 mb-5">
              <div className="h-5 w-3 border border-black ml-2 mr-5 "></div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p1}</div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p2}</div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p3}</div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p4}</div>
              <div className=" text-xs font-bold text-slate-600 ">{paraData.p5}</div>
            </div>
          ))}
          <div>
            <span className="text-2xl">$</span>
            <span className="text-5xl font-bold">72</span>
            <span className="text-slate-600">/month</span>
          </div>
          <button className="mb-10 text-white font-bold mt-5 cursor-pointer bg-orange-500 px-8 py-2 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
            Choose a plan
          </button>
        </div>
      </div>
      <div className="w-4/12 text-left">
        <p  className="font-bold text-xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">PRICES PLAN</p>
        <h1 className="text-5xl font-bold mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
    </div>
  );
};

export default SectionSeven;
