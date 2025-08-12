import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

import { getProjectById } from "../projectUtils";

const DetailedProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(Number(id));

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto pt-32 py-16 px-4 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link
          to="/projects"
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Return to Projects
        </Link>
      </motion.div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2 + custom * 0.05,
        ease: "easeOut",
      },
    }),
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.3 + custom * 0.07,
        ease: "easeOut",
      },
    }),
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container mx-auto pt-32 py-16 px-4"
    >
      <motion.div variants={itemVariants}>
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-600 hover:underline mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-6">
        {project.title}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants}>
          <motion.img
            variants={imageVariants}
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-lg mb-6"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />

          <div className="flex space-x-4">
            <motion.a
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="mr-2" /> GitHub
            </motion.a>

            <motion.a
              variants={buttonHoverVariants}
              whileHover="hover"
              whileTap="tap"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </motion.a>
          </div>
        </motion.div>

        <div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold mb-4"
          >
            Project Description
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 font-serif mb-6"
          >
            {project.longDescription}
          </motion.p>

          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold mb-2"
          >
            Technologies Used
          </motion.h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, index) => (
              <motion.span
                key={tech}
                variants={techBadgeVariants}
                custom={index}
                className="bg-gray-200 text-gray-700 font-serif px-3 py-1 font-semibold rounded-full text-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#e5e7eb",
                  transition: { duration: 0.2 },
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold mb-2"
          >
            Key Features
          </motion.h3>

          <ul className="list-disc list-inside text-gray-700">
            {project.features?.map((feature, index) => (
              <motion.li
                variants={featureVariants}
                custom={index}
                className="font-serif mb-1"
                key={index}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailedProjectPage;
