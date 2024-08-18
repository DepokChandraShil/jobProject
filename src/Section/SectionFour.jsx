import React from "react";

const SectionFour = () => {
  return (
    <div className="w-full bg-blue-50 overflow-hidden ">
      <div className="relative  whitespace-nowrap bg-blue-50  ">
        <div className="absolute animate-marquee ">
          <span className="inline-block font-semibold text-8xl px-4 py-2  ">
            SEO . Digital Marketing . Analysis . Digital . Agency .SEO . Digital
            Marketing . Analysis . Digital . Agency
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-36 pb-5">
        <div className="w-2/5 text-left pl-5 ">
          <p className="font-bold text-xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">
            Services
          </p>
          <h1 className="text-6xl font-semibold leading-snug">
            Lorem ipsum dolor sit, amet consectetur
          </h1>
          <div className="w-[450px] max-sm:w-[350px] h-[450px]  pl-5">
            <img
              src="/section4.png"
              alt="Logo"
              className="pt-10 w-[400px] h-[300px] mx-auto"
            />
          </div>
        </div>
        <div className="w-3/5 ">
          <div className="relative h-[600px] w-[350px] parent">
            <div className="childOne absolute h-[400px] w-[310px] mt-20 bg-[#0a0368] text-slate-200 border rounded-xl text-left pl-5 pr-5 ">
              <h1 className="mt-20  font-bold text-3xl">SEO Marketing</h1>
              <p className=" mt-5  text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit animi pariatur cupiditate mollitia sequi aspernatur sed officia illum, ad soluta?</p>
            </div>
            <div className="childTwo absolute h-[125px] w-[125px] border rounded-full bg-orange-600 text-white pt-[-200px] z-10 ml-10 mt-3  ">
              <p className="font-bold  text-xl mt-12">SEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
