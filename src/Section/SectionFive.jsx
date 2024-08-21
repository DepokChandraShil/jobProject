import React, { useState } from "react";
import BgWave from "../components/BgWave";

const SectionFive = () => {
  return (
    <div className="flex max-sm:flex-col items-center justify-center gap-5 max-sm:-mt-20">
      <div className="w-1/2 max-sm:w-full text-left">
        <div className="pl-5">
          <h5 className="font-bold text-xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">
            WHAT WE DO
          </h5>
          <h1 className="text-6xl max-sm:text-3xl font-semibold leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p className="mt-5 font-semibold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            rem. Ad odit nemo ducimus animi? Earum accusamus quod reiciendis,
            rem est quasi quidem aliquid aspernatur incidunt alias veritatis?
            Repellendus amet, ex aut nesciunt porro deserunt natus animi
            voluptatem aliquam commodi suscipit voluptas! Placeat magni debitis
            cum aut omnis similique expedita?
          </p>
        </div>

        <div className="">
          <div className="flex items-center justify-center mt-5">
            <div className="w-14 h-14 bg-orange-500 border rounded-lg bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
              <p className="text-center font-bold text-xl mt-3 text-white ">
                92%
              </p>
            </div>
            <div className="w-4/5 mt-7">
              <div className="relative w-full h-10 max-w-md mx-auto">
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out w-11/12 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="w-14 h-14 bg-orange-500 border rounded-lg bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
              <p className="text-center font-bold text-xl mt-3 text-white">
                82%
              </p>
            </div>
            <div className="w-4/5 mt-7">
              <div className="relative w-full h-10 max-w-md mx-auto">
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out w-3/4 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="w-14 h-14 bg-orange-500 border rounded-lg bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
              <p className="text-center font-bold text-xl mt-3 text-white">
                75%
              </p>
            </div>
            <div className="w-4/5 mt-7">
              <div className="relative w-full h-10 max-w-md mx-auto">
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all duration-300 ease-in-out w-8/12 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 max-sm:hidden">
            <BgWave />
      </div>
    </div>
  );
};

export default SectionFive;
