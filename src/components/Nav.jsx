import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen,setIsMenuOpen] = useState(false);
   

  const handleMenuToggler =()=>{
    setIsMenuOpen(!isMenuOpen);
  }


  const navItems = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/services", title: "Services" },
    { path: "/blog", title: "Blog" },
    { path: "/pages", title: "Pages" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <header className="w-full block container mx-auto xl:px-24 max-sm:px-2 py-8 bg-opacity-0 ">
      <nav className=" flex justify-between items-center py-4 px-1 gap-16 max-sm:gap-5 bg-white  shadow-orange-300 shadow-lg marker:border rounded-2xl z-50">
        <div className="">
          <h2 className=" text-2xl ml-8  text-orange-500">
            SEO <span className="font-bold text-orange-500">Portal</span>
          </h2>
        </div>
        <div className="">
          <ul className=" md:flex hidden gap-3 ">
            {navItems && navItems.length > 0
              ? navItems.map((item, i) => (
                  <li key={i}  onClick={() => setActiveIndex(i)}
                  className={`px-2 py-2 rounded ${
                    activeIndex === i
                      ? 'text-orange-600 font-bold'
                      : 'text-gray-500'
                  } transition duration-300 ease-in-out`}>
                    <NavLink to={item.path} className=" px-4 py-2  font-bold ">
                      {item.title}
                    </NavLink>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div>
                        <button className='block md:hidden mx-10'onClick={handleMenuToggler}>
                          {
                            isMenuOpen ? <FaXmark className='h-8 w-8 text-orange-500'/>:<FaBars className='h-8 w-8 text-orange-500' />
                          }
                            
                        </button>
                    </div>
                  
      </nav>
      {
          isMenuOpen ? 
          <div className='w-4/5 flex md:hidden flex-col justify-center items-center'>
           <ul className='gap-3'> 
                {
                  navItems && navItems.length >0 ? 
                  navItems.map((item,i)=>                                                        
                          <li key={i}  onClick={() => setActiveIndex(i)}
                  className={`px-4 py-2 rounded ${
                    activeIndex === i
                      ? 'text-orange-600 font-bold'
                      : 'text-gray-500'
                  } transition duration-300 ease-in-out`}> 
                              <NavLink to={item.path}>
                                {item.title}
                              </NavLink>
                          </li>
                          
                     ): null} 
                      
                    </ul>
                  
          </div> : null
        }
    </header>
  );
};

export default Nav;
