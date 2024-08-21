import React, { useEffect, useState } from "react";


const SectionEight = () => {
  const [clickData, setClickData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickValue, setClickValue] = useState("");
  console.log(clickValue);
  useEffect(() => {
    setIsLoading(true);
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setClickData(data);
      });
    setIsLoading(false);
  }, []);

  const navData = [
    { title: "All", value: "" },
    { title: "Branding", value: "Branding" },
    { title: "Development", value: "development" },
    { title: "Marketing", value: "marketing" },
  ];

  const filteredData = (clickData, clickValue) => {
    let filteredValue = clickData;
    if (clickValue) {
      filteredValue = filteredValue.filter(
        (value) => value.valuee.toLowerCase() === clickValue.toLowerCase()
      );
    }
    return (
      <div className="p-4">
        <div className="flex max-sm:flex-col flex-wrap justify-center items-center gap-8">
          {filteredValue.map((item,i) => (
            <div
              key={i}
              className="w-3/12 max-sm:w-full p-4 border border-gray-300 rounded-lg shadow-md bg-white mt-5"
            >
              <div>
                <img src={item.src}/>
              </div>
              <h5 className="text-xl p-2 text- text-slate-500">{item.title}</h5>
              <h1 className="text-3xl p-2 text-slate-500">{item.para}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const result = filteredData(clickData, clickValue);

  return (
    <div>
      <div>
        <div className="">
         
          <ul className="gap-3 max-sm:gap-0 flex  flex-wrap justify-center items-center">
            {navData && navData.length > 0
              ? navData.map((item, i) => (
                  <li
                    key={i}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`px-4 py-2 rounded ${
                      activeIndex === i
                        ? " text-white font-bold  cursor-pointer  border rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
                        : "text-gray-500"
                    } transition duration-300 ease-in-out`}
                  >
                    <button onClick={() => setClickValue(item.value)}>
                      {item.title}
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
        {result}
      </div>
    </div>
  );
};

export default SectionEight;
