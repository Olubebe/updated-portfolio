import React, { useRef } from "react";
import { MdArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";
import SelectedProject from "./SelectedProject";

const HeroSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants for text elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: [0.25, 0.1, 0.25, 1.0], // More natural easing
      },
    }),
  };

  // Animation for highlighted text
  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.2 + 0.3,
        ease: "easeOut",
      },
    }),
  };

  // Scroll button animation
  const scrollButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(251, 191, 36, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      <motion.section
        className="bg-zinc-50 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl w-full space-y-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <h1 className="text-2xl font-serif font-medium">Oluwibe Faith</h1>
            <p className="text-xl text-gray-500 mt-2">Frontend Developer</p>
          </motion.div>

          <div>
            <motion.h2
              className="font-cursive text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
            >
              Where beautiful interfaces meet{" "}
              <motion.span
                className="bg-amber-100 inline-block px-2"
                variants={highlightVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                intuitive design
              </motion.span>
              <br className="hidden sm:block" />
              Crafting engaging experiences,{" "}
              <motion.span
                className="bg-amber-100 inline-block px-2"
                variants={highlightVariants}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                one user at a time
              </motion.span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20"
          variants={scrollButtonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <button
            onClick={handleScrollToProjects}
            aria-label="Scroll to projects"
            className="p-3 rounded-full transition-colors duration-300"
          >
            <MdArrowDownward className="text-2xl text-gray-700" />
          </button>
        </motion.div>
      </motion.section>

      <motion.section
        ref={targetRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SelectedProject />
      </motion.section>
    </>
  );
};

export default HeroSection;
