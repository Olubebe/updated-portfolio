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
    className={`cursor-pointer text-gray-500 hover:text-gray-900 transition ease-in-out font-semibold ${className}`}
  >
    {title}
  </Link>
);

const EmailButton: React.FC = () => (
  <Link
    to="mailto:faitholuwibe@gmail.com?subject=Welcome"
    target="_blank"
    rel="noopener noreferrer"
    className="font-serif text-sm py-3 px-6 bg-gray-950 hover:bg-gray-800 transition ease-in-out text-white font-semibold"
  >
    EMAIL
  </Link>
);

const MobileMenu: React.FC<{
  isOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLinkProps[];
}> = ({ isOpen, toggleMenu, navLinks }) => {
  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
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
              <Link to="/" className="text-2xl text-black font-sans">
                OluwibeFaith
              </Link>
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-2xl text-black"
              >
                <MdClose />
              </button>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-center items-center space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.title}
                  variants={mobileLinkVars}
                  className="overflow-hidden"
                >
                  <NavLink
                    {...link}
                    onClick={toggleMenu}
                    className="text-4xl lg:text-5xl font-serif"
                  />
                </motion.div>
              ))}
              <motion.div variants={mobileLinkVars}>
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
