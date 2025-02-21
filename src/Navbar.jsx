// import { Link } from "react-router-dom";
// import {  useRef} from "react";
// import { AiOutlineMenu } from "react-icons/ai";

// function Navbar() {
//     const navref=useRef(null)
//          function handleClick() {
//             if(navref.current)
//             {
//                 navref.current.classList.toggle("hidden")
//             }
//             console.log("clicked ")           
//          }
    
//     return(
//     //     <nav className= "bg-slate-800  p-0 m-0 w-screen  fixed backdrop-blur-md backdrop-brightness-50 flex justify-between md:justify-between items-center h-14 max-w-full mx-auto px-4 text-white left-0  top-0 z-10">
//     //         <p className= "flex float-start text-green-700 text-xl w-60 p-3">
                

//     //        <img src="logo.jpeg" alt="logo "  width="50px"   />


//     //         </p>
//     // <p className="animate-pulse   text-sm font-bold border-b-2 border-white    center top-96" ><Link to="/news">**Mandsur-News**</Link></p>

           
//     //          <p className="md:text-2xl text-sm ml-2 block md:hidden" onClick={handleClick}><AiOutlineMenu/></p>
            
//     //         <ul ref={navref} className= "flex nav flex-col m-0 ml-2  block  md:border-none md:bg-none  md:mt-0 mt-20  relative md:flex-row justify-end  text-yellow-50 text-sm w-auto p-2 ">
//     //             <li className= "left-10 w-auto p-2 cursor-pointer  hover:bg-white hover:text-black hover:scale-105  hover:rounded-xl  border-b-2 md:border-none border-white gap-6">  <Link to="/">Home</Link> </li>
//     //             <li  className= "left-10 w-auto p-2 cursor-pointer hover:bg-white hover:text-black hover:scale-105  hover:rounded-xl gap-6 border-b-2 md:border-none border-white">  <Link to="/places">Places</Link>    </li>
//     //             <li  className= "left-10 w-auto p-2 cursor-pointer hover:bg-white hover:text-black hover:scale-105 gap-6  hover:rounded-xl border-b-2 md:border-none border-white"> <Link to="/link">Links</Link> </li>
//     //             <li  className= "left-10 w-auto p-2  cursor-pointer hover:bg-white hover:text-black hover:scale-105 gap-6  hover:rounded-xl border-b-2 md:border-none border-white"> <Link to="/contact">Contact</Link> </li>
//     //         </ul>

//     //         {/* <Themetoggle/> */}
//     //     </nav>

//      <div className="backdrop-blur-md backdrop-brightness-50 flex justify-between md:justify-between items-center h-14 max-w-full mx-auto px-4 text-white sticky top-0 z-10">
//       <Link
//         to="/"
//         className="text-left uppercase text-[#00df9a] text-2xl tracking-wider z-50"
//       >Mandsaur</Link>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex">
//         {navItems.map((item) => (
//           <li key={item.id}>
//             <Link
//               className={
//                 "p-2 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" +
//                 (item.id === activeNavItem ? " text-[#00df9a]" : "")
//               }
//               to={item.to}
//               onClick={() => setActiveNavItem(item.id)}
//             >
//               {item.text}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className="block md:hidden z-10">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           "fixed md:hidden text-left flex flex-col gap-2 flex-wrap justify-start pt-14 items-center w-[60%] h-screen bg-transparent backdrop-blur-md ease-in-out duration-500"
//             + (
//               nav
//                 ? " left-0 top-0"
//                 : " top-0 bottom-0 left-[-100%]"
//               )
//         }
//       >
//         {/* Mobile Navigation Items */}
//         {navItems.map((item) => (
//           <li key={item.id} className="w-full">
//             <Link
//               className={
//                 "inline-block w-[calc(100%-1rem)] max-w-full ml-4 border-b-2 duration-300 text-[#00df9a] cursor-pointer border-[#00df9a] hover:text-white hover:border-white focus:text-white focus:border-white" +
//                 (item.id === activeNavItem ? " text-white" : "")
//               }
//               to={item.to}
//               onClick={() => setActiveNavItem(item.id)}
//             >
//               {item.text}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
  
//     )
    
// }
// export default Navbar ;

import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const navItems = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "Places", to: "/places" },
    { id: 3, text: "Links", to: "/link" },
    { id: 4, text: "Contact", to: "/contact" },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
      <div className="backdrop-blur-md w-screen  bg-cover object-cover   bg-slate-900 backdrop-brightness-50 flex justify-between md:justify-between items-center h-14 px-4 text-white sticky top-0 z-10">
    {/* <div
    className=""
    // style={{backgroundImage: `url(${noise})`}}
  > */}
 
    <Link
        to="/"
        className="text-left uppercase text-[#00df9a] text-2xl tracking-wider z-50"
      >
         <img src="logo.jpeg" alt="logo "  width="50px"   />
      </Link>
      <p className="animate-pulse   text-sm font-bold border-b-2 border-white    center top-96" ><Link to="/news">**Mandsur-News**</Link></p>


      {/* Desktop Navigation */}
      <ul className="hidden  md:flex">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              className={
                "p-2 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black" +
                (item.id === activeNavItem ? " text-[#00df9a]" : "")
              }
              to={item.to}
              onClick={() => setActiveNavItem(item.id)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          "fixed md:hidden text-left flex flex-col gap-2 flex-wrap justify-start pt-14 items-center w-[60%] h-screen bg-transparent backdrop-blur-md ease-in-out duration-500" +
          (nav ? " left-0 top-0" : " top-0 bottom-0 left-[-100%]")
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li key={item.id} className="w-full">
            <Link
              className={
                "inline-block w-[calc(100%-1rem)] max-w-full ml-4 border-b-2 duration-300 text-[#00df9a] cursor-pointer border-[#00df9a] hover:text-white hover:border-white focus:text-white focus:border-white" +
                (item.id === activeNavItem ? " text-white" : "")
              }
              to={item.to}
              onClick={() => setActiveNavItem(item.id)}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default Navbar;