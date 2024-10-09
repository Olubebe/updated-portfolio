import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllProjects } from "../projectUtils";
import { ProjectType } from "../types";

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 font-serif mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 font-serif font-semibold px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="bg-gray-200 text-gray-700 px-2 font-serif font-semibold py-1 rounded text-sm">
                +{project.stack.length - 3} more
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const SelectedProjects: React.FC = () => {
  const projects = getAllProjects();

  return (
    <section className="py-16 pt-32 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
