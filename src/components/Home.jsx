
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
    <div className="bg-slate-900  p-0 m-0 w-screen md:flex-row  flex flex-col items-center text-center ">
     
      <img
        className="w-full  px-5 py-16 max-w-[600px] h-auto object-cover rounded-md"
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
    <div className="bg-slate-900 p-0 m-0 w-screen h-full flex flex-col items-center text-center ">
      <h1 className="text-3xl text-[#d7b112]">Map:</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931454.9621761997!2d75.367938!3d24.224427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2us!4v1708586315798!5m2!1sen!2us"
        className="w-full h-64 sm:h-80 md:h-96 max-w-[600px] border-none  gap-6 px-5 py-10 rounded-md"
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