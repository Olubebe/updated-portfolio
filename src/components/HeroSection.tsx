import { MdArrowDownward } from "react-icons/md";
import SelectedProject from "./SelectedProject";
import { useRef } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const targetRef = useRef<null | HTMLDivElement>(null);

  const handleButtonClick = () => {
    setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 2000);
  };

  return (
    <div>
      <div className="font-serif bg-zinc-50 pt-56 px-20 py-5 h-screen">
        <div className="font-serif">
          <motion.h2
            className="text-lg font-serif font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Oluwibe Faith
          </motion.h2>
          <motion.h2
            className="font-serif text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frontend Developer
          </motion.h2>
        </div>
        <div>
          <motion.h2
            className="font-cursive md:text-5xl text-lg max-w-xl leading-loosed font-bold mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Where beautiful interfaces meet{" "}
            <span className="bg-amber-100 md:text-5xl text-lg font-cursive inline-block">
              intuitive design
            </span>{" "}
            <br />
            Crafting engaging experiences,{" "}
            <span className="bg-amber-100 md:text-5xl text-lg font-cursive inline-block">
              one user at a time
            </span>{" "}
          </motion.h2>
        </div>
        <div className="md:mt-48 mt-40 flex justify-center items-center">
          <MdArrowDownward
            onClick={handleButtonClick}
            className=" rounded-full text-2xl cursor-pointer text-gray-500 hover:text-gray-800 animate-bounce "
          />
        </div>
      </div>
      <div ref={targetRef}>
        <SelectedProject />
      </div>
    </div>
  );
};

export default HeroSection;
