import React, { useEffect, useState } from "react";

const SectionTen = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("article.json")
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);

  return (
    <div>
      <div>
        <div className="w-full flex max-sm:flex-col items-center justify-center gap-5">
          <div className="w-1/2 max-sm:w-full text-left pl-10">
            <p className="mt-5 font-bold text-xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">
              BLOG POST
            </p>
            <h1 className="text-5xl py-4">Latest News & Articles</h1>
            <p className="text-slate-600 text-base py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              error mollitia fuga quasi tenetur consequatur, quas voluptatum!
              Illum, quasi facere!
            </p>
          </div>
          <div className="w-1/2 ml-5 pt-3">
            <button className="mb-10 max-sm:mb-0 text-white font-bold mt-5 cursor-pointer bg-orange-500 px-12 py-3 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
              See all Blogs..
            </button>
          </div>
        </div>

        <div className="mt-5">
          {article && article.length > 0 ? (
            <div className="mt-5 flex max-sm:flex-col items-center justify-center gap-10 ">
              {article.map((item, i) => (
                <div key={i} className="w-3/12 mt-5 max-sm:w-full pl-5 bg-white border p-5">
                  <ul className="flex items-center  gap-5 mb-5">
                    <li className=" text-white text-xs font-bold mt-5 cursor-pointer bg-orange-500 px-5 py-2 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">ADMIN</li>
                    <li className=" text-white text-xs font-bold mt-5 cursor-pointer bg-orange-500 px-5 py-2 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">Online Marketing</li>
                  </ul>
                  <img src={item.src} className="border border-none rounded-xl mb-5"/>
                  <h1 className="text-3xl text-left py-5">{item.heading}</h1>
                  <p className="text-base text-left text-slate-600">{item.details}</p>
                  <h3 className=" text-white text-xs font-bold mt-5 cursor-pointer bg-orange-500 px-5 py-2 border rounded-full hover:bg-orange-300 hover:text-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">{item.date}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p>data not found</p>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SectionTen;
