import React from "react";
import { FaGithub } from "react-icons/fa";

type Project = {
  id: number;
  image: string;
  description: string;
  stack: string;
  title: string;
  github: string;
  demo: string;
};

const data: Project[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317294/image2_pbkwzb.png",
    title: "Ecommerce Website",
    description:
      "Browse and buy products online from the comfort of your own home.",
    github: "https://github.com/Olubebe/couture-websites",
    stack: "React, Redux, Fake Store Api, CSS",
    demo: "https://organic-couture.netlify.app/",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317282/image1_mgvutz.png",
    title: "Bankist Application",
    description: "Manage your money on the go with our virtual banking app.",
    stack: "JavaScript, CSS",
    github: "https://github.com/Olubebe/Bankist-Application",
    demo: "https://bankist-app-1234.netlify.app/",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317233/hedpqzwmehgnku4nzevv.png",
    title: "Trello Clone",
    description: "A Productivity Website.",
    stack: "Nextjs, Zustand, TailwindCSS, Appwrite, React Beautiful DND",
    github: "https://github.com/Olubebe/Trello-Clone",
    demo: "https://trello-clone-2-o.vercel.app/",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317310/image3_qsxkxo.png",
    title: "Virtual Digital Banking",
    description: "Your mobile banking revolution.",
    stack: "React, CSS",
    github: "https://github.com/Olubebe/Virtual-Banking",
    demo: "https://dolla-925a46.netlify.app/",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317320/image4_brbbtq.png",
    title: "Gym Website",
    description: "Get stronger, fitter, and healthier at Air Fitness.",
    stack: "HTML, CSS, JavaScript, Gsap",
    github: "https://github.com/Olubebe/gym-website",
    demo: "https://airfit.netlify.app/",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317335/image6_mto2cy.png",
    title: "Resturant Website",
    description: "Relaxed restaurant and bar with delicious food and drinks.",
    stack: "HTML, CSS, JavaScript",
    github: "https://github.com/Olubebe/restuarant-landing-page",
    demo: "https://gericht-resturant-web.netlify.app/",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317328/image5_g6l6z8.png",
    title: "Youtube Clone",
    description: "A platform for sharing and discovering videos. ",
    stack: "React, Redux, Rapid API, Material UI",
    github: "https://github.com/Olubebe/youtube-clone",
    demo: "https://olu-media.netlify.app/",
  },
];

const SelectedProject = () => {
  return (
    <div className="bg-zinc-50">
      <div className=" py-10 px-20">
        <h2 className="font-serif text-4xl font-medium">Selected Projects</h2>
      </div>
      <section className="flex flex-col md:flex-row flex-wrap justify-between  items-center w-full py-20 px-10 ">
        {data.map((project, index) => (
          <div key={index} className=" basis-3/6 mt-5">
            <div className="w-11/12 h-11/12 relative">
              <div className="w-full h-full relative overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                  src={project.image}
                  alt="img"
                />
              </div>

              <div className="absolute bottom-4 right-4 flex gap-5 items-center">
                <a
                  className="bg-zinc-200 opacity-95 rounded-full p-2 hover:bg-zinc-300 transition-all transform ease-in backdrop-blur-2xl"
                  target="_blank"
                  href={project.github}
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  className="bg-zinc-200 opacity-95 rounded-full p-2 hover:bg-zinc-300 transition-all transform ease-in backdrop-blur-lg"
                  target="_blank"
                  href={project.demo}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className=" mt-3 space-y-3">
              <h2 className=" text-3xl font-serif font-medium ">
                {project.title}
              </h2>
              <p className="text-gray-500 italic font-serif font-medium text-lg">
                {project.description}
              </p>
              <p className="text-gray-600 font-normal font-serif text-lg">
                <span className="font-medium font-serif">Stack:</span>{" "}
                {project.stack}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SelectedProject;
