import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <div className="bg-zinc-50 px-10 py-10">
        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between">
          <div className="space-y-2">
            <h2 className="font-serif font-medium">Oluwibe Faith</h2>
            <p className="font-serif font-medium text-gray-500">
              Frontend Developer
            </p>
            <div className="flex gap-5">
              <a
                className=" opacity-95 border-2  p-2 hover:border-zinc-600 transition-all transform ease-in backdrop-blur-2xl"
                href="https://github.com/Olubebe"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                className=" opacity-95 border-2  p-2 hover:border-zinc-600 transition-all transform ease-in backdrop-blur-2xl"
                href="https://twitter.com/OluwibeFaith"
              >
                <BsTwitterX className="w-6 h-6" />
              </a>
              <a
                className=" opacity-95 border-2  p-2 hover:border-zinc-600 transition-all transform ease-in backdrop-blur-2xl"
                href="https://www.linkedin.com/in/faith-oluwibe/"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-serif text-zinc-800 font-semibold max-w-xl text-3xl">
              Like what you see? Let's create something{" "}
              <span className="bg-amber-100 text-3xl font-serif inline-block">
                amazing together
              </span>
            </h2>
            <a
              href="mailto:faitholuwibe@gmail.com?subject=Welcome"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-serif cursor-pointer text-sm py-3 px-6 bg-gray-950 hover:bg-gray-800 transition ease-in-out text-white font-semibold">
                EMAIL
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
