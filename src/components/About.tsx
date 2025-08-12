import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="font-serif text-3xl lg:text-4xl font-medium"
            variants={textVariants}
            custom={0}
          >
            I'm{" "}
            <motion.span
              className="bg-amber-100 inline-block px-1"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Oluwibe Faith
            </motion.span>
          </motion.h2>

          <motion.p className="font-serif" variants={textVariants} custom={1}>
            A Front-end Developer passionate about crafting intuitive and
            engaging user experiences through clean, modern web design and
            efficient, well-structured code.
          </motion.p>

          <motion.p className="font-serif" variants={textVariants} custom={2}>
            My journey in web development began during a bootcamp at AltSchool
            Africa, where I discovered the exciting world of frontend
            development. Since then, I've been dedicated to honing my skills
            through personal projects, online courses, and valuable internship
            experiences at Cutstruct Technologies Limited and Techninover.
          </motion.p>

          <motion.p className="font-serif" variants={textVariants} custom={3}>
            These opportunities have allowed me to design responsive dashboards,
            integrate APIs using Redux, implement client-side validations, and
            drive UX improvements through cross-functional collaboration.
          </motion.p>

          <motion.p className="font-serif" variants={textVariants} custom={4}>
            Currently, I'm pursuing a degree in Software Engineering at Miva
            Open University while working as a frontend developer. I approach
            every project as an opportunity to expand my expertise and create
            meaningful solutions that delight users.
          </motion.p>

          <motion.p className="font-serif" variants={textVariants} custom={5}>
            I'm excited to collaborate with like-minded professionals and
            contribute my skills to create exceptional digital experiences.
            Let's connect and bring your vision to life!
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src="https://res.cloudinary.com/olubebe/image/upload/v1709665306/kwiwbt1tqs7aciefdbpf.jpg"
            alt="Oluwibe Faith"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
