import React from "react";
import { MdArrowDownward } from "react-icons/md";
import SelectedProject from "./SelectedProject";

const HeroSection = () => {
  return (
    <div>
      <div className="font-serif bg-zinc-50 pt-56 px-20 py-5 h-screen">
        <div className="font-serif">
          <h2 className="text-lg font-serif font-medium">Oluwibe Faith</h2>
          <h2 className="font-serif text-gray-500">Frontend Developer</h2>
        </div>
        <div>
          <h2 className="font-cursive md:text-4xl text-lg max-w-3xl  font-bold mt-5">
            Transforming designs and requirements into intuitive, engaging
            digital experiences.I craft responsive front-ends and visuals that
            bring ideas to life. Passionate about building strategic, persuasive
            interactive products.
          </h2>
        </div>
        <div className="md:mt-56 mt-40 flex justify-center items-center">
          <MdArrowDownward className=" rounded-full text-2xl cursor-pointer text-gray-500 hover:text-gray-800 animate-bounce " />
        </div>
      </div>
      <div>
        <SelectedProject />
      </div>
    </div>
  );
};

export default HeroSection;
