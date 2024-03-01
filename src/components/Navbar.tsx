import React, { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

interface MobileNavLinkProps {
  customTitle: string;
  customHref: string;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="fixed w-full opacity-95 bg-zinc-50  backdrop-blur-xl px-4 md:px-10 py-5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-sans text-2xl font-bold text-gray-900">
              OluwibeFaith
            </h2>
          </div>
          <div className="lg:hidden">
            <div
              className="cursor-pointer text-md text-black"
              onClick={toggleMenu}
            >
              <HiMiniBars3BottomRight className="text-2xl" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-5">
            <p className="font-serif cursor-pointer text-sm text-gray-500 hover:text-gray-900 transition ease-in-out font-semibold">
              WORK
            </p>
            <p className="font-serif cursor-pointer text-sm text-gray-500 hover:text-gray-900 transition ease-in-out font-semibold">
              ABOUT
            </p>
            <p className="font-serif cursor-pointer text-sm text-gray-500 hover:text-gray-900 transition ease-in-out font-semibold">
              RESUME
            </p>
            <button className="font-serif cursor-pointer text-sm py-3 px-6 bg-gray-950 hover:bg-gray-800 transition ease-in-out text-white font-semibold">
              EMAIL
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-amber-100 text-black p-10"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <h1 className="text-2xl text-black font-sans">
                    OluwibeFaith
                  </h1>
                  <p
                    className="cursor-pointer text-md text-black"
                    onClick={toggleMenu}
                  >
                    <MdClose className="text-2xl" />
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center font-serif items-center gap-4 "
                >
                  <div className="overflow-hidden space-y-5 font-serif ">
                    <MobileNavLink customTitle="WORK" customHref="/" />
                    <MobileNavLink customTitle="ABOUT" customHref="#" />
                    <MobileNavLink customTitle="RESUME" customHref="#" />
                    <button className="font-serif  cursor-pointer text-4xl py-3 px-10 bg-gray-950 hover:bg-gray-800 transition ease-in-out text-white ">
                      EMAIL
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  customTitle,
  customHref,
}) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase  text-black"
    >
      <a
        className="font-serif text-gray-900 hover:text-gray-600 transition ease-in-out"
        href={customHref}
      >
        {customTitle}
      </a>
    </motion.div>
  );
};

export default Navbar;
