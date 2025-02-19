import { Link } from "react-router-dom";
import {  useRef} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
    const navref=useRef(null)
         function handleClick() {
            if(navref.current)
            {
                navref.current.classList.toggle("hidden")
            }
            console.log("clicked ")           
         }
    
    return(
        <nav className= "bg-slate-800  p-0 m-0 w-screen  fixed backdrop-blur-md backdrop-brightness-50 flex justify-between md:justify-between items-center h-14 max-w-full mx-auto px-4 text-white left-0  top-0 z-10">
            <p className= "flex float-start text-green-700 text-xl w-60 p-3">
                

           <img src="logo.jpeg" alt="logo "  width="50px"   />


            </p>
           
             <p className="text-5xl block md:hidden" onClick={handleClick}><AiOutlineMenu/></p>
            
            <ul ref={navref} className= "flex nav flex-col   block  md:border-none md:bg-none  md:mt-0 mt-20  relative md:flex-row justify-end  text-yellow-50 text-sm w-auto p-2  right-10  ">
                <li className= "left-10 w-auto p-2 cursor-pointer  hover:bg-white hover:text-black hover:scale-105  hover:rounded-xl  border-b-2 md:border-none border-white gap-6">  <Link to="/">Home</Link> </li>
                <li  className= "left-10 w-auto p-2 cursor-pointer hover:bg-white hover:text-black hover:scale-105  hover:rounded-xl gap-6 border-b-2 md:border-none border-white">  <Link to="/places">Places</Link>    </li>
                <li  className= "left-10 w-auto p-2 cursor-pointer hover:bg-white hover:text-black hover:scale-105 gap-6  hover:rounded-xl border-b-2 md:border-none border-white"> <Link to="/link">Links</Link> </li>
                <li  className= "left-10 w-auto p-2  cursor-pointer hover:bg-white hover:text-black hover:scale-105 gap-6  hover:rounded-xl border-b-2 md:border-none border-white"> <Link to="/contact">Contact</Link> </li>
            </ul>

            {/* <Themetoggle/> */}
        </nav>
    )
    
}
export default Navbar ;