import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import CV from "../assets/cv01.pdf";

interface NavLinkProps {
  title: string;
  href: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks: NavLinkProps[] = [
    { title: "PROJECTS", href: "/projects" },
    { title: "ABOUT", href: "/about" },
    { title: "RESUME", href: CV, target: "_blank" },
  ];

  return (
    <header className="fixed w-full z-30 bg-zinc-50 bg-opacity-95 backdrop-blur-xl">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-sans text-xl font-medium text-gray-900">
            Oluwibe Faith
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-2xl text-black"
            >
              <HiMiniBars3BottomRight />
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                {...link}
                className="font-serif text-sm"
              />
            ))}
            <EmailButton />
          </div>
        </div>
        <MobileMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          navLinks={navLinks}
        />
      </nav>
    </header>
  );
};

const NavLink: React.FC<NavLinkProps> = ({
  title,
  href,
  onClick,
  className = "",
  target,
}) => (
  <Link
    to={href}
    onClick={onClick}
    target={target}
    className={`cursor-pointer text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out font-semibold ${className}`}
  >
    {title}
  </Link>
);

const EmailButton: React.FC = () => (
  <Link
    to="mailto:faitholuwibe@gmail.com?subject=Welcome"
    target="_blank"
    rel="noopener noreferrer"
    className="font-serif text-sm py-3 px-6 bg-gray-950 hover:bg-gray-800 transition duration-300 ease-in-out text-white font-semibold"
  >
    EMAIL
  </Link>
);

const MobileMenu: React.FC<{
  isOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLinkProps[];
}> = ({ isOpen, toggleMenu, navLinks }) => {
  // Smoother menu slide-in animation
  const menuVars = {
    initial: {
      scaleY: 0,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1], // Cubic bezier for smoother, more natural feel
      },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.33, 0, 0.67, 0],
      },
    },
  };

  // Staggered animation for menu items
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.07,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2, // Slight delay for better visual flow
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
  };

  // Improved animation for individual menu links
  const mobileLinkVars = {
    initial: {
      y: 40,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 w-full h-screen origin-top bg-amber-100 text-black p-10"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link to="/" className="text-2xl text-black font-sans">
                  OluwibeFaith
                </Link>
              </motion.div>
              <motion.button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-2xl text-black"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdClose />
              </motion.button>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-center items-center space-y-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  variants={mobileLinkVars}
                  className="overflow-hidden"
                  custom={index}
                >
                  <NavLink
                    {...link}
                    onClick={toggleMenu}
                    className="text-4xl lg:text-5xl font-serif hover:text-gray-700"
                  />
                </motion.div>
              ))}
              <motion.div
                variants={mobileLinkVars}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <EmailButton />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
