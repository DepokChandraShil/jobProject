import React, { useState } from "react";
import Wave from "../components/Wave";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ullam est eos suscipit sunt nesciunt facilis, debitis, asperiores molestiae doloribus aspernatur error ea nihil nemo dicta fuga quasi dolores recusandae quia? Similique, ullam veritatis nostrum exercitationem eos hic aliquam aliquid!";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <div className="container ">
      <section className="w-full ">
        <div className="flex items-center text-center">
          <div className="m-5 w-1/2 text-left pt-12">
            <h1 className="text-6xl font-extrabold leading-snug">
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
          <div className="w-1/2">

          <Wave/>
     
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
