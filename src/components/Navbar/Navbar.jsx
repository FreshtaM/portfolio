import React, { useState } from 'react';
import logo from './logo/logo (1).png'

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-between flex-wrap px-6 py-4  fixed w-full top-0 bg-white">
     <div className="flex items-center flex-shrink-0 text-white mr-[60rem] ">
       <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-gro">
         <a href="#feature" className="block mt-4 lg:inline-block lg:mt-0 text-white-200  font-Open Sans mr-4">
         <p className='  font-Open Sans font-[600] text-[1.2rem]'>Projects</p>
         </a>
         <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200  font-Open Sans mr-4">
            <p className='  font-Open Sans font-[600] text-[1.2rem]'>Play</p>
         </a>
         <a href="#blog" className="block mt-4 lg:inline-block lg:mt-0 text-white-200  font-Open Sans  mr-4">
            <p className='  font-Open Sans font-[600] text-[1.2rem]'>Blog</p>
         </a>
       </div>
     </div>
   </nav>
 );
}
export default Navbar;