
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';


  const placesdata = [
    {
      title: "Buddhist Caves",
      image: "/historical/Buddhist Caves.jpg"
    },
    {
      title: "Dharmarajeshwar Temple",
      image: "/historical/Dharmarajeshwar Temple.jpg"
    },
    {
      title: "Lord Pashupatinath",
      image: "/historical/Pashupatinath Temple.jpg"
    },
    {
      title: "Chaturbhuj Nala",
      image: "/historical/Chaturbhuj Nala.jpg"
    },
    {
      title: "Lord Pashupatinath Temple",
      image: "/historical/Pashupatinath Temple.png"
    },
    {
      title: "Vijay Stambh",
      image: "/historical/Vijay Stambh.jpg"
    },
    {
      title: "Gandhi Sagar Dam",
      image: "/historical/Gandhi Sagar Dam.jpg"
    }
  ];
  function Modal({showModal, toggleModal, img, title}){
    return(
      <div className={(showModal ? '' : 'hidden ') + "fixed h-screen w-screen flex flex-wrap flex-col justify-start items-center bg-black/[.8] z-50 overflow-auto"}>
        <button
          className="absolute top-0 right-40 m-2 p-2 bg-red-500 text-black rounded-full hover:bg-red-700 hover:text-white"
          onClick={toggleModal}
        >
         <AiOutlineClose size={20} />
        </button>
  
        <h1 className="animate-zoom text-2xl my-2">
          {title}
        </h1>
  
        <img
          className="object-cover w-[60%] animate-zoom"
          src={img}
          alt={img?.split('.')[0]}
        />
      </div>
    );
  }
  function Showplaces({title, desc, img,toggleModal})
  {


    return(<>

<div
      className='  relative after:inline after:text-center after:absolute after:top-0 after:left-0 after:right-0 after:text-xl after:bg-black/[.5] after:text-transparent after:transition-transform-all after:duration-200 after:h-0 hover:after:h-10 hover:after:text-white after:content-[attr(data-image-heading)] cursor-zoom-in'
      data-image-heading={title}
    >
      <img
        className="object-cover w-[300px] h-[300px]"
        src={img}
        alt={img.split('.')[0]}
       onClick={toggleModal}
      />
      <p
        className="absolute left-0 bottom-0 right-0"
      >
        {desc}
      </p>
    </div>
    </>)
  }
  function Places(){

    const [showModal, setShowModal] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState(-1);

  const toggleModal = (imgIndex =-1) => {
    setShowModal(!showModal);
    // if(currentModalImage >= 0){
    //   setCurrentModalImage(-1);
    // } else {
    //   setCurrentModalImage(imgIndex);
    // }
    setCurrentModalImage(imgIndex);
  }
return(
  <div
  className="flex flex-wrap justify-center gap-2 mt-3  top-10 fixed "
>
  {
    placesdata.map(({title, image}, i) => {
      return <Showplaces title={title} img={image} desc="" toggleModal={() => toggleModal(i)} />;
  })
  }

  <Modal
    showModal={showModal}
    toggleModal={toggleModal}
    img={placesdata[currentModalImage]?.image}
    title={placesdata[currentModalImage]?.title}
  />
</div>
);

}
export default Places;