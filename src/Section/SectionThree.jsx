import React from "react";
import BgWave from "../components/BgWave";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faArrowRight } from "@fortawesome/free-solid-svg-icons";


const SectionThree = () => {
  return (
    <div className="flex max-sm:flex-col justify-center items-center gap-5 w-ful">
      <div className="w-1/2 max-sm:hidden">
        <div className="bg-black">
          <BgWave />
        </div>
      </div>
      <div className="w-1/2 max-sm:w-full mt-10 ">
        <div className="flex flex-col text-left gap-5 ">
          <h5 className="text-slate-400 font-bold text-xl">About Us </h5>
          <h1 className="font-semibold text-5xl ">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="font-semibold text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            repudiandae ullam corporis laboriosam iste dignissimos quae debitis
            qui totam impedit ab accusamus quos molestiae, quia, illum, atque
            aspernatur recusandae quod labore. Voluptatibus voluptate magni quod
            fugiat, asperiores voluptatum debitis ullam rerum sit et laboriosam
            repudiandae ea. Mollitia blanditiis aperiam quasi.
          </p>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
            <li className="flex gap-4 items-center justify-center bg-blue-100 p-2 border rounded-md px-5 ">
              <FontAwesomeIcon
                icon={faCheck}
                className="p-2 border rounded-full bg-orange-500 text-white font-extrabold"
              />
              <p>Amazing Communication </p>
            </li>
            <li className="flex flex-1 gap-4 items-center justify-center bg-blue-100 p-2 border rounded-md px-5 ">
              <FontAwesomeIcon
                icon={faCheck}
                className="p-2 border rounded-full bg-orange-500 text-white font-extrabold"
              />
              <p>Amazing Communication </p>
            </li>
            <li className="flex flex-1 gap-4 items-center justify-center bg-blue-100 p-2 border rounded-md px-5 ">
              <FontAwesomeIcon
                icon={faCheck}
                className="p-2 border rounded-full bg-orange-500 text-white font-extrabold"
              />
              <p>Amazing Communication </p>
            </li>
            <li className="flex flex-1 gap-4 items-center justify-center bg-blue-100 p-2 border rounded-md px-5 ">
              <FontAwesomeIcon
                icon={faCheck}
                className="p-2 border rounded-full bg-orange-500 text-white font-extrabold"
              />
              <p>Amazing Communication </p>
            </li>
          </ul>
          <div className="w-2/5 max-sm:ml-5  max-sm:w-4/5 flex items-center justify-center gap-5 text-white font-bold mt-5 cursor-pointer bg-orange-500  py-4 px-10 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
         
            <p>Discover More</p>
            <FontAwesomeIcon icon={faArrowRight} />
          
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
