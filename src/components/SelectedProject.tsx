import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { getAllProjects } from "../projectUtils";
import { ProjectType } from "../types";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ProjectCard: React.FC<{ project: ProjectType; index: number }> = ({
  project,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Staggered entrance animation based on index
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link to={`/project/${project.id}`}>
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow:
              "0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden h-48">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              animate={{
                scale: isHovered ? 1.05 : 1,
                filter: isHovered ? "brightness(1.05)" : "brightness(1)",
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Elegant image overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.6 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Subtle accent line */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          <div className="p-6">
            <motion.div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineArrowNarrowRight className="text-gray-700" />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-gray-600 font-serif mb-4"
              animate={{ opacity: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            <motion.div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech, i) => (
                <motion.span
                  key={tech}
                  className="bg-gray-200 text-gray-700 font-serif font-semibold px-2 py-1 rounded text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ backgroundColor: "#F3F4F6", scale: 1.03 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.stack.length > 3 && (
                <motion.span
                  className="bg-gray-200 text-gray-700 px-2 font-serif font-semibold py-1 rounded text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  +{project.stack.length - 3} more
                </motion.span>
              )}
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const SelectedProjects: React.FC = () => {
  const projects = getAllProjects();

  // Animation variants for the section header
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "80px",
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section className="py-16 pt-32 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            variants={headerVariants}
          >
            Selected Projects
          </motion.h2>

          <motion.div
            className="h-1 bg-amber-400 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={underlineVariants}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View all projects button with elegant animation - optional */}
        {projects.length > 6 && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/projects">
              <motion.div
                className="inline-flex items-center gap-2 font-serif bg-white px-8 py-3 rounded-lg shadow-md border border-gray-100"
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span>View all projects</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                >
                  <HiOutlineArrowNarrowRight className="text-gray-900" />
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SelectedProjects;
