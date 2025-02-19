
// import img from '../assets/background.jpg';
// // import mdsInWorld from '../assets/mandsaur_in_world.png';
// import mdsInMP from '../assets/mandsaur_in_mp.png';
// import background from '../assets/background2.jpg';
// import { Link } from "react-router-dom";


// function Header({children}){
//   return(
//     <header
//       className="w-screen h-screen bg-cover flex justify-center items-center font-medium text-white text-center text-6xl relative"
//     >
//       <div
//         className="w-full h-full bg-cover absolute brightness-50 -z-50"
//         style={{backgroundImage: `url(${background})`}}
//       />

//       {children}
//     </header>
//   );
// }
// function ToastMsg()
// {
// return(<div  className="bg-purple-500 md: m-auto w-2/6 h-auto h-50  mt-10 p-3 text-xl top-10 rounded-md border-black animate-pulse " >
// <Link to="/news"> now about latest news in mandsaur</Link>

// </div>);

// }


// function GeneralInfo(){
//   return (
//     <div
//       className=" w-screen h-screen bg-cover flex flex-col gap-2 justify-center max-w-full md:rounded-3xl md:backdrop-blur-sm md:flex-row md:mx-20 md:p-20 md:gap-0"
//     >
//       <img className="md:w-[500px] md:md-2 md:p-0 m-5 max-w-full h-96 object-cover rounded-md" src={img} alt="Pashupatinath temple form above" />
//       <div
//         className="text-center"
//       >
//         <h1
//           className="text-3xl text-[#0f0f0f]"
//         >General Info</h1>
//         <p className="md:px-20 px-5 text-xl text-[#3d3d3a]">
//           Mandsaur is a popular tourist destination known for the temple of Lord Pashupatinath.
//           Mandsaur is identified with the city of Dashpur, which is attested in various ancient
//           and medieval texts and inscriptions. According to the 12th-century Jain work called the
//           Parishishthparvan, the name Dashpur was given to the city by a group of merchants visiting
//           the royal fortress of a king named Udayana and his ten sons.
//         </p>
//       </div>
//     </div>
//   );
// }

// function Geography(){
//   return (
//     <div
//       className="flex flex-col gap-2 justify-center max-w-full md:rounded-3xl md:backdrop-blur-sm md:flex-row md:mx-20 md:p-20 md:gap-0"
//     >
//       <img className="md:w-[500px] md:md-2 md:p-0 m-5 max-w-full h-96 object-cover rounded-md" src={mdsInMP} alt="Mandsaur in Madhya Pradesh" />
//       <div
//         className="text-center"
//       >
//         <h1
//           className="text-3xl text-[#0f0f0f]"
//         >Geography</h1>
//         <p className="md:px-20 px-5  bg-black p-0 m-0 text-sm text-[#3d3d3a]">
//           Mandsaur has an area of 9,791 km2 (3,780 sq mi) and is present on the border of the
//           Mewar and Malwa so the culture is the combination of the both regions, and is bounded
//           by Neemuch District to the north west, Chittorgarh district to North east, Kota district
//           and Jhalawar district to east and Pratapgarh District, and Ratlam District to the south.
//           It is part of Ujjain Division.
//         </p>
//       </div>
//     </div>
//   );
// }
//       // <img src={mdsInWorld} alt="Mandsaur in world" />
//       // {/*width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy"*/}

// function Map() {
//   return(
//     <div
//       className="  flex flex-col gap-2 text-center mx-auto justify-center w-screen p-5  md:backdrop-blur-sm md:p-20"
//     >
//       <h1
//         className="text-3xl text-[#e1e1e1]"
//       >Map:</h1>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931454.9621761997!2d75.367938!3d24.224427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1708586315798!5m2!1sen!2sus"
//         referrerPolicy="no-referrer-when-downgrade"
//         className="md:w-[500px] w-full h-96 border-none rounded-md md:mx-auto outline-none"
//       ></iframe>
//     </div>
//   );
// }

// export default function Home(){
//   return(
//     <>
//       <Header>
//         <h1>
//         Welcome <em>to</em> <span className="text-red-500">Mandsaur!</span>
//         <ToastMsg></ToastMsg>

//         </h1>
//       </Header>

//       <div
//         className="flex flex-wrap   md:gap-y-36 bg-slate-950 text-orange-400 md:my-36 gap-y-5 my-5"
//       >
//         <GeneralInfo />
//         <Geography />
//         <Map />
//       </div>
//       </>
//   );
// }
import img from "../assets/background.jpg";
import mdsInMP from "../assets/mandsaur_in_mp.png";
import background from "../assets/background2.jpg";

function Header() {
  return (
    <header
      className=" p-0 m-0   bg-cover bg-center opacity-90 h-96 Md:w-screen w-screen md:h-screen flex justify-center items-center font-medium text-white text-center  text-xl  brightness-50 sm:text-5xl md:text-6xl"
      style={{ backgroundImage: `url(${background})`, }}
    >
      <h1 className="text-gray-50 brightness-100">
        Welcome <em>to</em> <span className="text-red-500">Mandsaur!</span>
      </h1>
    </header>
  );
}

function Section({ title, imageSrc, altText, description }) {
  return (
    <div className="bg-slate-900 p-0 m-0 md:flex-row w-screen  flex flex-col items-center text-center gap-6 px-5 py-10">
     
      <img
        className="w-full max-w-[600px] h-auto object-cover rounded-md"
        src={imageSrc}
        alt={altText}
      />
      <div>
      <h1 className="text-3xl text-[#d7b112]">{title}</h1>
      <p className="text-lg sm:text-xl  text-[#fbf38e] max-w-4xl">{description}</p>
      </div>
   
    </div>
  );
}

function Map() {
  return (
    <div className="bg-slate-900 p-0 m-0 w-screen h-full flex flex-col items-center text-center gap-6 px-5 py-10">
      <h1 className="text-3xl text-[#d7b112]">Map:</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931454.9621761997!2d75.367938!3d24.224427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2us!4v1708586315798!5m2!1sen!2us"
        className="w-full h-64 sm:h-80 md:h-96 max-w-[600px] border-none rounded-md"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Section
        title="General Info"
        imageSrc={img}
        altText="Pashupatinath temple"
        description="Mandsaur is a popular tourist destination known for the temple of Lord Pashupatinath. 
        It is identified with the city of Dashpur, attested in various ancient texts. 
        The name Dashpur was given by merchants visiting the fortress of King Udayana and his ten sons."
      />
      <Section
        title="Geography"
        imageSrc={mdsInMP}
        altText="Mandsaur in Madhya Pradesh"
        description="Mandsaur has an area of 9,791 km² and lies on the border of Mewar and Malwa, resulting in a blend of both cultures. 
        It is bounded by Neemuch, Chittorgarh, Kota, and Ratlam districts and is part of the Ujjain Division."
      />
      <Map />
    </>
  );
}