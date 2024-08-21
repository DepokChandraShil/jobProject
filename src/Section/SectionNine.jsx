import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const SectionNine = () => {
  const [img, setImg] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("slider.json")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  
const handleLeft =()=>{
  setCurrentSlide(currentSlide === 0 ? img.length-1:currentSlide-1);
}
const handleRight =()=>{
  setCurrentSlide(currentSlide === img.length-1 ? 0:currentSlide+1);
}
setTimeout(handleRight,3000);
const leftImageItems = img.slice(0,4);
const rightImageItems = img.slice(4,8);
  return (
    <div>
      <div>
        <div className="flex flex-col text-center mt-5">
          <h4 className="mb-3 font-bold text-xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text">Testominal</h4>
          <h1 className="text-5xl w-1/2 max-sm:w-full max-sm:text-3xl m-auto mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, eum.</h1>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center gap-5" >
            <div className="w-3/12 max-sm:hidden">
                {
                  leftImageItems && leftImageItems.length >0 ? 
                  <div>
                  {leftImageItems.map((item,i)=>
                  <div key={i} className={`py-7 ${i % 2 === 0 ? 'pl-14' : 'pl-28'}`}>
                    <img src={item.src} className="w-24 h-24 border border-none rounded-full"onClick={()=>setCurrentSlide(i)}/>
                  </div>
                  )}
                </div>

                  :<p>no left image found</p>
                }
            </div>
            <div className="container relative flex  w-5/12 max-sm:w-full">
              <BsArrowLeftCircleFill className="absolute w-10 h-10 text-blue-500 left-3 top-1/2 " onClick={handleLeft}/>
              {img && img.length > 0 ? (
                img.map((data, i) => (
                  <div key={i} className={`flex flex-col items-center justify-center gap-5 p-16 ${currentSlide === i ? "w-full h-full":"hidden"}`}>
                  
                      <img src={data.src} className="w-36 h-36 border border-none rounded-full"/>

                      <p className="text-xl text-slate-600 ">{data.details}</p>
                      <h3 className="text-orange-600 text-xl font-bold">{data.heading}</h3>
                      <p>{data.para}</p>
                    </div>
                  
                ))
              ) : (
                <p>img not found</p>
              )}
              <BsArrowRightCircleFill className="absolute w-10 h-10 text-blue-500 right-3 top-1/2" onClick={handleRight}/>
            </div>
            <div className="w-3/12 max-sm:hidden">
            {
                  rightImageItems && rightImageItems.length >0 ? 
                  <div>
                  {rightImageItems.map((item,i)=>
                  <div key={i} className={`py-7 ${i % 2 === 0 ? 'px-20' : 'px-2'}`}>
                    <img src={item.src} className="w-24 h-24 border border-none rounded-full" onClick={()=>setCurrentSlide(i+4)}/>
                  </div>
                  )}
                </div>

                  :<p>no left image found</p>
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
