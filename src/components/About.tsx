const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium">
            I'm <span className="bg-amber-100 inline-block">Oluwibe Faith</span>
          </h2>
          <p className="font-serif">
            A Front-end Developer passionate about crafting intuitive and
            engaging user experiences through clean, modern web design and
            efficient, well-structured code.
          </p>
          <p className="font-serif">
            My journey in web development began during a bootcamp at AltSchool
            Africa, where I discovered the exciting world of frontend
            development. Since then, I've been dedicated to honing my skills
            through personal projects, online courses, and valuable internship
            experiences at Cutstruct Technologies Limited and Techninover.
          </p>
          <p className="font-serif">
            These opportunities have allowed me to design responsive dashboards,
            integrate APIs using Redux, implement client-side validations, and
            drive UX improvements through cross-functional collaboration.
          </p>
          <p className="font-serif">
            Currently, I'm pursuing a degree in Software Engineering at Miva
            Open University while working as a frontend developer. I approach
            every project as an opportunity to expand my expertise and create
            meaningful solutions that delight users.
          </p>
          <p className="font-serif">
            I'm excited to collaborate with like-minded professionals and
            contribute my skills to create exceptional digital experiences.
            Let's connect and bring your vision to life!
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src="https://res.cloudinary.com/olubebe/image/upload/v1709665306/kwiwbt1tqs7aciefdbpf.jpg"
            alt="Oluwibe Faith"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
