import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { HiMiniBars3BottomRight, HiOutlineArrowUpRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import CV from "../assets/Copy of Oluwibe-Faith CV002.docx (4).pdf";

// interface NavLinkProps {
//   title: string;
//   href: string;
//   onClick?: () => void;
//   className?: string;
//   target?: string;
// }

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const toggleMenu = () => setIsOpen(!isOpen);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const navLinks = [
    { title: "HOME", href: "/" },
    { title: "PROJECTS", href: "/projects" },
    { title: "ABOUT", href: "/about" },
    { title: "RESUME", href: CV, target: "_blank" },
  ];

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/20 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.a
              href="/"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-pink-600 bg-clip-text text-transparent">
                Oluwibe Faith
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={toggleMenu}
              className="lg:hidden relative z-50 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <MdClose className="w-6 h-6 text-gray-900" />
                ) : (
                  <HiMiniBars3BottomRight className="w-6 h-6 text-gray-900" />
                )}
              </motion.div>
            </motion.button>

            {/* Desktop navigation */}
            <motion.div
              className="hidden lg:flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  {...link}
                  className="relative group text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                />
              ))}
              <EmailButton />
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} navLinks={navLinks} />
    </>
  );
};

interface NavLinkComponentProps {
  title: string;
  href: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

const NavLink = ({
  title,
  href,
  onClick,
  className = "",
  target,
}: NavLinkComponentProps) => (
  <motion.a
    href={href}
    onClick={onClick}
    target={target}
    className={`cursor-pointer transition-all duration-300 ${className}`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ y: -2 }}
  >
    <span className="flex items-center gap-1">
      {title}
      {target === "_blank" && (
        <HiOutlineArrowUpRight className="w-3 h-3 opacity-60" />
      )}
    </span>
    <motion.div
      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

const EmailButton = () => (
  <motion.a
    href="mailto:faitholuwibe@gmail.com?subject=Welcome"
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium text-sm border border-gray-800 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: 0.4 }}
  >
    {/* Animated background */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600"
      initial={{ x: "100%" }}
      whileHover={{ x: "0%" }}
      transition={{ duration: 0.3 }}
    />
    <span className="relative z-10 flex items-center gap-2">
      EMAIL
      <motion.span
        animate={{ x: [0, 3, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <HiOutlineArrowUpRight className="w-4 h-4" />
      </motion.span>
    </span>
  </motion.a>
);

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navLinks: Array<{ title: string; href: string; target?: string }>;
}

const MobileMenu = ({ isOpen, toggleMenu, navLinks }: MobileMenuProps) => {
  const menuVariants = {
    initial: {
      clipPath: "circle(0% at top right)",
      opacity: 0,
    },
    animate: {
      clipPath: "circle(150% at top right)",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    exit: {
      clipPath: "circle(0% at top right)",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-40 bg-gradient-to-br from-blue-50 via-white to-pink-50"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-pink-200/30 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-gray-200/30 to-blue-200/30 rounded-full blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <motion.div
            className="flex flex-col h-full relative z-10"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-6 pt-20">
              {navLinks.map((link) => (
                <motion.div
                  key={link.title}
                  variants={itemVariants}
                  className="text-center"
                >
                  <motion.a
                    href={link.href}
                    target={link.target}
                    onClick={toggleMenu}
                    className="block text-4xl md:text-5xl font-bold text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.title}
                  </motion.a>
                </motion.div>
              ))}

              {/* Mobile Email Button */}
              <motion.div variants={itemVariants} className="pt-8">
                <motion.a
                  href="mailto:faitholuwibe@gmail.com?subject=Welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-semibold text-lg shadow-xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={toggleMenu}
                >
                  GET IN TOUCH
                  <HiOutlineArrowUpRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div className="p-6 text-center" variants={itemVariants}>
              <p className="text-sm text-gray-600">
                © 2024 Oluwibe Faith. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
