import React, { useRef } from "react";
import { MdArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";
import SelectedProject from "./SelectedProject";

const HeroSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = () => {
    setTimeout(() => {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      <section className="bg-zinc-50 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl w-full space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-serif font-medium">Oluwibe Faith</h1>
            <p className="text-xl text-gray-500 mt-2">Frontend Developer</p>
          </motion.div>

          <motion.h2
            className="font-cursive text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Where beautiful interfaces meet{" "}
            <span className="bg-amber-100 inline-block px-2">
              intuitive design
            </span>
            <br className="hidden sm:block" />
            Crafting engaging experiences,{" "}
            <span className="bg-amber-100 inline-block px-2">
              one user at a time
            </span>
          </motion.h2>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button
            onClick={handleScrollToProjects}
            aria-label="Scroll to projects"
            className="p-2 rounded-full transition-colors duration-300"
          >
            <MdArrowDownward className="text-2xl text-gray-700 animate-bounce" />
          </button>
        </motion.div>
      </section>

      <section ref={targetRef}>
        <SelectedProject />
      </section>
    </>
  );
};

export default HeroSection;
