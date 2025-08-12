import { ProjectType } from "./types";

export type { ProjectType };

const projects: ProjectType[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1754947914/Screenshot_2025-08-11_222542_k6qzzy.png",
    title: "Scullock Website",
    description:
      "A professional corporate website for Scullock Limited, showcasing comprehensive security solutions including CCTV surveillance, access control systems, and smart home integration with modern design and responsive functionality.",
    longDescription:
      "A professional website for Scullock Limited, a leading security solutions company specializing in advanced electronic security systems. The site showcases comprehensive security services including CCTV surveillance, access control systems, smart home integration, and fire alarm solutions for residential, commercial, and corporate facilities.",
    stack: ["React", "Redux", "CSS", "Responsive Design"],
    demo: "https://www.scullocklimited.com",
    features: [
      "Modern responsive design with professional aesthetic",
      "Service showcase with detailed solution descriptions",
      "Client testimonials and case studies section",
      "Partnership highlights with leading OEM brands",
      "Contact forms and 24/7 availability messaging",
      "Mobile-optimized user experience",
      "Professional branding and visual identity",
    ],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317294/image2_pbkwzb.png",
    title: "Ecommerce Website",
    description:
      "Browse and buy products online from the comfort of your own home.",
    longDescription:
      "Our Ecommerce Website offers a seamless online shopping experience. Built with React and Redux, it provides a responsive and intuitive interface for browsing and purchasing products. The Fake Store API is utilized to populate the site with a diverse range of products, while custom CSS ensures a visually appealing and user-friendly design.",
    stack: ["React", "Redux", "Fake Store API", "CSS"],
    github: "https://github.com/Olubebe/couture-websites",
    demo: "https://organic-couture.netlify.app/",
    features: [
      "Product browsing and search functionality",
      "Shopping cart management",
      "User authentication",
      "Responsive design for mobile and desktop",
      "Integration with Fake Store API for product data",
    ],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317282/image1_mgvutz.png",
    title: "Bankist Application",
    description: "Manage your money on the go with our virtual banking app.",
    longDescription:
      "The Bankist Application is a virtual banking solution that allows users to manage their finances effortlessly. Developed using vanilla JavaScript and styled with CSS, this application demonstrates proficiency in creating interactive and functional web applications without relying on heavy frameworks.",
    stack: ["JavaScript", "CSS"],
    github: "https://github.com/Olubebe/Bankist-Application",
    demo: "https://bankist-app-1234.netlify.app/",
    features: [
      "User authentication",
      "Account balance tracking",
      "Money transfer between accounts",
      "Transaction history",
      "Loan requests",
    ],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317233/hedpqzwmehgnku4nzevv.png",
    title: "Trello Clone",
    description: "A Productivity Website.",
    longDescription:
      "This Trello clone is a robust task management application built with modern web technologies. It features drag-and-drop functionality for intuitive task organization, real-time updates using Appwrite's backend services, and a clean, responsive interface styled with TailwindCSS. The project demonstrates proficiency in state management with Zustand and showcases the ability to create complex, interactive web applications using Next.js.",
    stack: [
      "Next.js",
      "Zustand",
      "TailwindCSS",
      "Appwrite",
      "React Beautiful DND",
    ],
    github: "https://github.com/Olubebe/Trello-Clone",
    demo: "https://trello-clone-2-o.vercel.app/",
    features: [
      "Drag-and-drop task management",
      "Real-time updates",
      "Board and list creation",
      "Search functionality to quickly find tasks or boards",
      "Responsive design",
    ],
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317310/image3_qsxkxo.png",
    title: "Virtual Digital Banking",
    description: "Your mobile banking revolution.",
    longDescription:
      "Virtual Digital Banking is a modern, mobile-first banking application built with React. It offers a sleek interface for users to manage their finances, make transactions, and access various banking services. The application showcases responsive design principles, ensuring a consistent experience across different devices.",
    stack: ["React", "CSS"],
    github: "https://github.com/Olubebe/Virtual-Banking",
    demo: "https://dolla-925a46.netlify.app/",
    features: ["Mobile-responsive design"],
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317320/image4_brbbtq.png",
    title: "Gym Website",
    description: "Get stronger, fitter, and healthier at Air Fitness.",
    longDescription:
      "The Air Fitness Gym Website is a dynamic and engaging platform designed to showcase the gym's facilities, classes, and membership options. Built with HTML, CSS, and JavaScript, and enhanced with GSAP for smooth animations, this website provides an interactive and visually appealing experience for potential gym members.",
    stack: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/Olubebe/gym-website",
    demo: "https://airfit.netlify.app/",
    features: [
      "Responsive design",
      "Class schedule display",
      "Membership information",
      "Trainer profiles",
      "Smooth scrolling and animations with GSAP",
    ],
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317335/image6_mto2cy.png",
    title: "Restaurant Website",
    description: "Relaxed restaurant and bar with delicious food and drinks.",
    longDescription:
      "This Restaurant Website offers a mouthwatering digital presence for a relaxed dining establishment. Developed using HTML, CSS, and JavaScript, the site features an elegant design that showcases the restaurant's ambiance, menu, and special offerings. The responsive layout ensures a great viewing experience on both desktop and mobile devices.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Olubebe/restuarant-landing-page",
    demo: "https://gericht-resturant-web.netlify.app/",
    features: [
      "Interactive menu display",
      "Photo gallery of dishes and ambiance",
      "Special offers and events section",
    ],
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/olubebe/image/upload/v1709317328/image5_g6l6z8.png",
    title: "Youtube Clone",
    description: "A platform for sharing and discovering videos.",
    longDescription:
      "This YouTube Clone is a comprehensive video sharing platform that mimics the core functionalities of YouTube. Built with React and Redux for state management, it leverages the Rapid API to fetch real video data. The Material UI framework is used to create a sleek, responsive interface that closely resembles the original YouTube design.",
    stack: ["React", "Redux", "Rapid API", "Material UI"],
    github: "https://github.com/Olubebe/youtube-clone",
    demo: "https://olu-media.netlify.app/",
    features: [
      "Video search and playback",
      "User authentication",
      "Video recommendations",
      "Responsive design for mobile and desktop",
    ],
  },
];

export function getProjectById(id: number): ProjectType | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjects(): ProjectType[] {
  return projects;
}
