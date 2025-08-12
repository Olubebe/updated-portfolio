import React, { useRef, useState } from "react";
import { MdArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaCoffee,
} from "react-icons/fa";
import SelectedProjects from "./SelectedProject";

// Mock SelectedProject component - replace with your actual component
const SelectedProject = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <h2 className="text-3xl font-bold text-gray-800">
      Selected Projects Section
    </h2>
  </div>
);

const HeroSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleScrollToProjects = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  const socialIconVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  const profileImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.0,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 1.0,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      filter: "blur(0px)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <>
      <motion.section
        className="relative bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            className="relative mx-auto mb-8"
            variants={profileImageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <motion.img
                src="https://res.cloudinary.com/olubebe/image/upload/v1754953755/Screenshot_20250811_220805_Gallery_csdmh7.jpg"
                alt="Oluwibe Faith"
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(true)}
                initial={{ opacity: 0, filter: "blur(20px)" }}
                animate={{
                  opacity: imageLoaded ? 1 : 0,
                  filter: imageLoaded ? "blur(0px)" : "blur(20px)",
                }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              404: Boring developer not found
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-blue-600">I'm Faith</span> –
              the frontend dev who makes websites that actually spark joy. While
              everyone else is building "revolutionary" apps, I'm over here at{" "}
              <span className="font-semibold text-blue-600">IOBOTECH</span>{" "}
              making energy dashboards feel like Netflix and payment flows
              smoother than your morning coffee.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-700">
                My secret sauce:
              </span>{" "}
              React that doesn't fight you, animations that feel natural, and
              code so clean your future self will thank you. Been turning pixels
              into experiences for 2+ years.
            </p>
            <p className="text-lg font-medium text-gray-800">
              Ready to build something that makes people go "wait, how'd they do
              that?" Let's make some digital magic happen.
            </p>
          </motion.div>

          {/* CTA Button with blur effect */}
          <motion.div
            className="relative"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            {/* Button with intentional blur background */}
            <div className="relative">
              <motion.button
                className="px-8 py-4 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 relative z-10"
                onClick={handleScrollToProjects}
                whileHover={{
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
              >
                View My Work
              </motion.button>

              {/* Blurred background effect */}
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-full opacity-30"
                style={{
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1.1, 1.3, 1.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={targetRef}
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        <SelectedProjects />
      </motion.section>
    </>
  );
};

export default HeroSection;
