import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { useEffect } from "react";


// import { Home,Places } from "./components";
// import {FaSun,FaMoon} from 'react-icons/fa';
// import { useState } from "react";
// function Themetoggle()
// {
//     const[darkMode,SetDarkMode]=useState(false);
//     const toggletheme=()=>
//     {
//         SetDarkMode(!darkMode);
//         document.body.classList.toggle('dark');
//     }
//     return(<>
//     <button onClick={toggletheme} className="p-2 bg-gray dark:bg-gary-800 rounded-full">{darkMode ?<FaSun size={24} color="yellow"/>:<FaMoon size={24} color="black"/>}</button>
//     </>)
// }

const showToast=()=>{
    toast.success("this is a succes",{
        position:'top-center',
        autoClose:10000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        theme:"light"
    })
    console.log("tost called");
    
}


function Navbar() {

    
    return(
        <nav className= "bg-slate-800 p-0 m-0 w-screen  fixed backdrop-blur-md backdrop-brightness-50 flex justify-between md:justify-between items-center h-14 max-w-full mx-auto px-4 text-white left-0  top-0 z-10">
            <p className= "flex float-start text-green-700 text-xl w-60 p-3">
                

           <img src="./public/logo.jpeg" alt="logo "  width="60px"   />


            </p>


            <ul className= "flex  justify-end  text-yellow-50 text-sm w-auto p-2   ">
                <li className= "left-10 w-auto p-2  hover:bg-green-800 hover:rounded-xl gap-6">  <Link to="/">Home</Link> </li>
                <li  className= "left-10 w-auto p-2  hover:bg-green-800  hover:rounded-xl gap-6 ">  <Link to="/places">Places</Link>    </li>
                <li  className= "left-10 w-auto p-2 hover:bg-green-800 gap-6  hover:rounded-xl "> <Link to="/link">Links</Link> </li>
                <li  className= "left-10 w-auto p-2  hover:bg-green-800 gap-6  hover:rounded-xl"> <Link to="/contact">Contact</Link> </li>
            </ul>

            {/* <Themetoggle/> */}
        </nav>
    )
    
}
export default Navbar ;