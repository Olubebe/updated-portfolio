import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllProjects } from "../projectUtils";
import { ProjectType } from "../types";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ImageSkeleton = () => (
  <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded">
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);

// Lazy loading image component
type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
};

const LazyImage = ({ src, alt, className, onLoad }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div className="relative">
      {!loaded && !error && (
        <div className={`absolute inset-0 ${className}`}>
          <ImageSkeleton />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        onLoad={handleLoad}
        onError={() => setError(true)}
        loading="lazy"
      />
      {error && (
        <div
          className={`absolute inset-0 ${className} bg-gray-200 flex items-center justify-center`}
        >
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

// Navigation function using react-router's useNavigate
const navigateToProject =
  (navigate: (path: string) => void) => (id: string) => {
    console.log(`Navigate to /project/${id}`);
    navigate(`/project/${id}`);
  };

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  // Removed unused isHovered and setIsHovered state
  const navigate = useNavigate();
  const handleNavigate = navigateToProject(navigate);

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
        "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)",
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
        onClick={() => handleNavigate(String(project.id))}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image container with advanced effects */}
        <div className="relative overflow-hidden h-56">
          <motion.div variants={imageVariants} animate="initial">
            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            variants={overlayVariants}
            animate="initial"
          />

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Animated border accent */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-pink-500 to-blue-400"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Hover action button */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-colors">
              <HiOutlineArrowNarrowRight className="w-6 h-6 text-gray-800" />
            </div>
          </motion.div>
        </div>

        {/* Content section */}
        <div className="p-6 relative z-10">
          <motion.div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h3>

            <motion.div
              initial={{ opacity: 0, x: -10, rotate: -45 }}
              animate={{
                opacity: 0,
                x: -10,
                rotate: -45,
              }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-2"
            >
              <HiOutlineArrowNarrowRight className="text-blue-600 w-5 h-5" />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3"
            animate={{
              opacity: 0.8,
              y: 5,
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

        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const SelectedProjects = () => {
  const projects = getAllProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "120px",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-pink-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-gray-200/20 to-blue-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={headerVariants}>
            <motion.span
              className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4 border border-blue-100"
              whileHover={{ scale: 1.05 }}
            >
              FEATURED WORK
            </motion.span>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-500 to-blue-600 bg-clip-text text-transparent">
              Selected Projects
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A curated collection of innovative solutions that showcase
              cutting-edge technology and exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            className="h-1 bg-gradient-to-r from-gray-500 via-pink-500 to-stone-500 mx-auto rounded-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={underlineVariants}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Enhanced CTA button
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl border border-white/20 backdrop-blur-sm overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative z-10">View All Projects</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <HiOutlineArrowNarrowRight className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </motion.span>
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};
export default SelectedProjects;
