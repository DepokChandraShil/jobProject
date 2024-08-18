import React, { useState } from 'react'
import Wave from "../components/Wave";
const SectionOne = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ullam est eos suscipit sunt nesciunt facilis, debitis, asperiores molestiae doloribus aspernatur error ea nihil nemo dicta fuga quasi dolores recusandae quia? Similique, ullam veritatis nostrum exercitationem eos hic aliquam aliquid!";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded ? text : text.slice(0, maxLength);
  return (
    <div className="  w-full flex max-sm:flex-col items-center text-center ">
    <div className="m-5 max-sm:ml-10 w-1/2 max-sm:w-full text-left">
      <h1 className="text-6xl font-extrabold ">
        Digital Marketing<br></br>{" "}
        <span className="text-orange-500 text-7xl mt-4 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">
          AGENCY
        </span>
      </h1>
      <p className="font-bold text-gray-600">{displayedText}</p>
      <button
        onClick={toggleReadMore}
        className="text-white font-bold mt-5 cursor-pointer bg-orange-500 px-8 py-2 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"
      >
        {isExpanded ? " Read Less" : "Read More"}
      </button>
    </div>
    <div className="w-full">
    <Wave />
    </div>
  </div>
  )
}

export default SectionOne