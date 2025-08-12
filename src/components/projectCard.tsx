import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { ProjectType } from "../types";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0],
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotateZ: 1,
      filter: "brightness(1.1) saturate(1.2)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
    initial: {
      scale: 1,
      rotateZ: 0,
      filter: "brightness(1) saturate(1)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const overlayVariants = {
    hover: {
      opacity: 1,
      background:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%)",
      transition: { duration: 0.4 },
    },
    initial: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group perspective-1000"
    >
      <motion.div
        className="relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer border border-white/20 shadow-xl"
        whileHover={{
          y: -12,
          rotateY: 5,
          rotateX: 5,
          scale: 1.02,
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* <motion.div
          className="absolute top-4 left-4 z-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isHovered ? 1 : 0.8,
            x: isHovered ? 0 : -5,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {project.category}
        </motion.div> */}

        {/* <motion.div
          className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-lg text-xs font-medium"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {project.year}
        </motion.div> */}

        {/* Image container with advanced effects */}
        <div className="relative overflow-hidden h-56">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            variants={imageVariants}
            animate={isHovered ? "hover" : "initial"}
          />

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            variants={overlayVariants}
            animate={isHovered ? "hover" : "initial"}
          />

          {/* Animated particles effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={
              isHovered
                ? {
                    backgroundImage: `radial-gradient(circle at ${
                      Math.random() * 100
                    }% ${
                      Math.random() * 100
                    }%, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
                  }
                : {}
            }
            transition={{ duration: 0.5 }}
          />

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Animated border accent */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Hover action button with conditional links */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a
              href={project.demo || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <HiOutlineExternalLink className="w-6 h-6 text-gray-800" />
            </a>
          </motion.div>
        </div>

        {/* Content section with clickable wrapper */}
        <a
          href={project.demo || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="p-6 relative z-10">
            <motion.div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h3>

              <motion.div
                initial={{ opacity: 0, x: -10, rotate: -45 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                  rotate: isHovered ? 0 : -45,
                }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-2"
              >
                <HiOutlineArrowNarrowRight className="text-blue-600 w-5 h-5" />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-gray-600 text-sm leading-relaxed mb-4"
              animate={{
                opacity: isHovered ? 1 : 0.8,
                y: isHovered ? 0 : 5,
              }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Tech stack with staggered animations */}
            <motion.div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech, i) => (
                <motion.span
                  key={tech}
                  className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#F3F4F6",
                    borderColor: "#E5E7EB",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.stack.length > 3 && (
                <motion.span
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium border border-blue-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  +{project.stack.length - 3} more
                </motion.span>
              )}
            </motion.div>
          </div>
        </a>

        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              : "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};
