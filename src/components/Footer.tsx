import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="bg-zinc-50 px-4  py-8 lg:py-10">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
          <div className="space-y-4">
            <h2 className="font-serif font-medium text-2xl">Oluwibe Faith</h2>
            <p className="font-serif font-medium text-gray-500">
              Frontend Developer
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="https://github.com/Olubebe"
                icon={<FaGithub className="w-5 h-5" />}
              />
              <SocialLink
                href="https://twitter.com/OluwibeFaith"
                icon={<BsTwitterX className="w-5 h-5" />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/faith-oluwibe/"
                icon={<FaLinkedin className="w-5 h-5" />}
              />
            </div>
          </div>
          <div className="space-y-4 lg:text-right">
            <h2 className="font-serif text-zinc-800 font-semibold text-2xl lg:text-3xl max-w-xl">
              Like what you see? Let's create something{" "}
              <span className="bg-amber-100 inline-block">
                amazing together
              </span>
            </h2>
            <div>
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
      </footer>
    </>
  );
};

const SocialLink = ({ href, icon }: any) => (
  <a
    className="opacity-95 border-2 p-2 hover:border-zinc-600 transition-all transform ease-in backdrop-blur-2xl"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;
