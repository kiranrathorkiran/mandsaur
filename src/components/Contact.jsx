import { Github, Linkedin } from "react-bootstrap-icons";

import '../App.css';

export default function Contact() {
  return (
    <div className="w-screen h-screen fixed  flex flex-col items-center mt-10  text-xl md:text-2xl text-center bg-black text-slate-50">
      <br/>
      <p>If you want to contact me, please write to:</p>
      <a
        href="mailto:kiranrathor8085@gmail.com"
        className="text-shadow hover:scale-150 hover:font-bold focus:scale-150 focus:font-bold transition-all duration-500"
      >
       kiranrathor8085@gmail.com
      </a>
      <p className="mt-5">My social media addresses:</p>
      <div
        className="flex bg-transparent h-[60px] p-3 gap-4 rounded mt-2
        backdrop-blur-sm"
      >
        <a
          href="https://github.com/kiranrathorkiran"
          target="_blank"
          className="after:inline-block after:-z-10 after:w-[30px]
          after:h-[30px] after:bg-white after:relative after:top-[-33px]
          after:right-[-2px] after:rounded-full"
        >
          <Github
            color="#171516"
            size={36}
            className="transition-shadow
            hover:shadow-lg hover:shadow-white"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kiran-rathor-837890284"
          target="_blank"
        >
          <Linkedin
            color="royalblue"
            size={36}
            className="transition-shadow
            hover:shadow-lg hover:shadow-[#4169e1]"
          />
        </a>
      </div>
    </div>
  );
}
