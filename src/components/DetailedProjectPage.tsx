import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Assume we have a getProjectById function to fetch project details
import { getProjectById } from "../projectUtils";

const DetailedProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto pt-32 py-16 px-4"
    >
      <Link
        to="/projects"
        className="text-blue-600 hover:underline mb-8 inline-block"
      >
        &larr; Back to Projects
      </Link>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-lg mb-6"
          />
          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="text-gray-700 font-serif mb-6">
            {project.longDescription}
          </p>
          <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-6 ">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 font-serif px-3 py-1 font-semibold rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-700">
            {project.features?.map((feature, index) => (
              <li className="font-serif" key={index}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailedProjectPage;
